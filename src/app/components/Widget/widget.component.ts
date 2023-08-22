import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Widget } from '../../types/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  @Input() widget!: Widget;
  @Output() deleteClick = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  onClick() {
    this.deleteClick.emit(this.widget.id);
  }
}
