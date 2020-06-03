import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeSelectorComponent } from './date-range-selector/date-range-selector.component';
import { IdleTimeoutComponent } from './idle-timeout/idle-timeout/idle-timeout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DateRangeSelectorComponent,
    IdleTimeoutComponent, 
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgIdleKeepaliveModule.forRoot(),
    HttpClientModule,
  ],
  exports:[DateRangeSelectorComponent],
  entryComponents: [IdleTimeoutComponent]
})
export class CommonControlModule { }
