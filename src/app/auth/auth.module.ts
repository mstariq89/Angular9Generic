import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NonAuthGuard } from '../utils/guards/non-auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { I18nModule } from '../shared/i18n/i18n.module';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' ,canActivate: [NonAuthGuard],},
  { path: 'login', component: LoginComponent, data: { title: 'Login' },canActivate: [NonAuthGuard], },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' },canActivate: [NonAuthGuard], },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Forgot Password' },canActivate: [NonAuthGuard], },
  { path: 'recover-password', component: RecoverPasswordComponent, data: { title: 'Recover Password' },canActivate: [NonAuthGuard], }
];


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AppButtonComponent,
    RecoverPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    I18nModule
  ],
  exports: [RouterModule],
})
export class AuthModule { }
