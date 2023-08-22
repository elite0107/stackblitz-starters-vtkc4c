import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { WidgetsService } from './services/widgets.service';
import { NewWidget, Widget } from './types/widget';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatToolbarModule, RouterModule, MatButtonModule, MatIconModule],
})
export class AppComponent implements OnInit {

  count: number = 0;
  total_price: number = 0;
  widgets: Widget[] | NewWidget[] = [];
  constructor( private widgetsService: WidgetsService ) {}

  ngOnInit() {}
}
