import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomermanagementRoutingModule } from './customermanagement-routing.module';
import { ManagecustomersComponent } from './managecustomers/managecustomers.component';
import { ManageclinicsComponent } from './manageclinics/manageclinics.component';
import { AssignDeviceComponent } from './assign-device/assign-device.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddcustomersComponent } from './managecustomers/addcustomers/addcustomers.component';
import { AddclinicsComponent } from './manageclinics/addclinics/addclinics.component';


@NgModule({
  declarations: [
    ManagecustomersComponent, 
    ManageclinicsComponent, 
    AssignDeviceComponent, AddcustomersComponent, AddclinicsComponent
  ],
  imports: [
    CommonModule,
    CustomermanagementRoutingModule,
    TranslateModule,
  ]
})
export class CustomermanagementModule { }
