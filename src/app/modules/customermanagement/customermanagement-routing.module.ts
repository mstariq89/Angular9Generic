import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagecustomersComponent } from './managecustomers/managecustomers.component';
import { ManageclinicsComponent } from './manageclinics/manageclinics.component';
import { AssignDeviceComponent } from './assign-device/assign-device.component';


const routes: Routes = [
  {
    path: 'managecustomers',
    component: ManagecustomersComponent
  },
  {
    path: 'manageclinics',
    component: ManageclinicsComponent
  },
  {
    path: 'assign-device',
    component: AssignDeviceComponent
  },
  {
    path: '',
    component: ManagecustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomermanagementRoutingModule { }
