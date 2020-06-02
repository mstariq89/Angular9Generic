import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonControlModule } from 'src/app/shared/common-control/common-control.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    CommonControlModule
  ]
})
export class DashboardModule { }
