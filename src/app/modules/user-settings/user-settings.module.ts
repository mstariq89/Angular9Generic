import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AccountSettingsComponent, 
    ChangePasswordComponent, 
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
