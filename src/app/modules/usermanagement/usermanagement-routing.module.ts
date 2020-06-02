import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';


const routes: Routes = [
  {
    path: 'manageusers',
    component: ManageusersComponent
  },
  {
    path: 'manageroles',
    component: ManagerolesComponent
  },
  {
    path: '',
    component: ManageusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule { }
