import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
},
{
    path: 'profile',
    component: ProfileComponent
},
{
    path: 'changepassword',
    component: ChangePasswordComponent
},
{
    path: 'accountsettings',
    component: AccountSettingsComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule { }
