import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicehistoryComponent } from './devicehistory/devicehistory.component';
import { DevicedetailsComponent } from './devicedetails/devicedetails.component';


const routes: Routes = [
  {
    path: 'devicehistory',
    component: DevicehistoryComponent
  },
  {
    path: 'devicedetails',
    component: DevicedetailsComponent
  },
  {
    path: '',
    component: DevicehistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
