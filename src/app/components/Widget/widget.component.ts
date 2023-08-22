import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../../types/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  @Input() widget!: Widget;
  constructor() {}

  ngOnInit() {}
}
