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
    let temp: Widget = {
      name: 'Widget 3',
      color: 'RED',
      price: Math.random(),
      sale: false,
      id: '1',
    };

    this.widgets.push(temp);
  }
}
