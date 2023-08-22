import { Component, Input, OnInit } from '@angular/core';
import { NewWidget, Widget } from 'src/app/types/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  @Input() data?: Widget | NewWidget;
  constructor() {}

  ngOnInit() {}
}
