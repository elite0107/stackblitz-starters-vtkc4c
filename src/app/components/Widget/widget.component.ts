import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Widget } from '../../types/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  @Input() widget!: Widget;
  @Output() deleteHandler = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  onClick() {
    this.deleteHandler.emit(this.widget.id);
  }
}
