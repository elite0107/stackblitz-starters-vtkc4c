import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WidgetComponent } from '../Widget/widget.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
})
export class WidgetModule {}
