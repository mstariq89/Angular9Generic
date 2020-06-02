import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { DevicehistoryComponent } from './devicehistory/devicehistory.component';
import { DevicedetailsComponent } from './devicedetails/devicedetails.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { CommonControlModule } from 'src/app/shared/common-control/common-control.module';

@NgModule({
  declarations: [
    DevicehistoryComponent, 
    DevicedetailsComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    HighchartsChartModule,
    CommonControlModule
  ],
})
export class ReportsModule { }
