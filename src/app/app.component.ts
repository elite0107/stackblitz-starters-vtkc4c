import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { WidgetModule } from './components/Widget/widget.module';
import { WidgetsService } from './services/widgets.service';
import { NewWidget, Widget } from './types/widget';

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
  providers: [CurrencyPipe],
})
export class AppComponent implements OnInit {
  widgetsCount: number = 0;
  total_price: number = 0;
  widgets: Widget[] = [];

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.listWidgets();
  }

  listWidgets() {
    this.widgetsService.listWidgets().subscribe((response) => {
      this.widgets = [];
      Object.keys(response).forEach((key) => {
        this.widgets.push(response[key] as Widget);
      });

      this.getWidgetsCount();
      this.calcTotalPrice();
    });
  }

  getWidgetsCount() {
    this.widgetsCount = this.widgets.length;
  }

  calcTotalPrice() {
    this.total_price = this.widgets.reduce((sum, widget) => {
      return sum + widget.price;
    }, 0);
  }

  onAdd() {
    // produce a random card
    const colors: Array<'RED' | 'BLUE' | 'GREEN'> = ['RED', 'BLUE', 'GREEN'];
    const randomColor: 'RED' | 'BLUE' | 'GREEN' =
      colors[Math.floor(Math.random() * colors.length)];
    const randomPrice: number = Math.floor(Math.random() * 1000 + 1);
    const randomSale: boolean = Math.random() < 0.5;

    let temp: NewWidget = {
      name: `Widget ${Math.floor(Math.random() * 10)}`,
      description: `This is a random widget with ${randomColor} color`,
      price: randomPrice,
      color: randomColor,
      sale: randomSale,
    };

    this.widgetsService.addWidget(temp).subscribe((response) => {
      this.listWidgets();
    });
  }

  onDelete(id: string) {
    this.widgetsService.deleteWidget(id).subscribe((response) => {
      this.listWidgets();
    });
  }
}
