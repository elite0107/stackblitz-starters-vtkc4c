import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { WidgetModule } from './components/Widget/widget.module';
import { WidgetsService } from './services/widgets.service';
import { Widget } from './types/widget';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    WidgetModule,
  ],
})
export class AppComponent implements OnInit {
  count: number = 0;
  total_price: number = 0;
  widgets: Widget[] = [];
  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {}

  onAdd() {
    // produce a random card
    const colors: Array<'RED' | 'BLUE' | 'GREEN'> = ['RED', 'BLUE', 'GREEN'];
    const randomColor: 'RED' | 'BLUE' | 'GREEN' =
      colors[Math.floor(Math.random() * colors.length)];
    const randomPrice: number = Math.floor(Math.random() * 100) + 1;
    const randomSale: boolean = Math.random() < 0.5;

    let temp: Widget = {
      name: `Widget ${Math.floor(Math.random() * 10)}`,
      description: `This is a random widget with ${randomColor} color`,
      price: randomPrice,
      color: randomColor,
      sale: randomSale,
      id: uuid(),
    };

    this.widgets.push(temp);

    // calcualte count
    this.count++;

    // calculate total price
    this.total_price = this.widgets.reduce((sum, widget) => {
      return sum + widget.price;
    }, 0);
  }
}
