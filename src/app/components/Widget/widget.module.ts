import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WidgetComponent } from '../Widget/widget.component';

@NgModule({
  imports: [MatCardModule, MatButtonModule],
  declarations: [],
  exports: [WidgetComponent],
})
export class WidgetModule {}
