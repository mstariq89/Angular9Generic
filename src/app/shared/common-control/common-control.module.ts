import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeSelectorComponent } from './date-range-selector/date-range-selector.component';



@NgModule({
  declarations: [DateRangeSelectorComponent],
  imports: [
    CommonModule
  ],
  exports:[DateRangeSelectorComponent]
})
export class CommonControlModule { }
