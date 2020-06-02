import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { LayoutOutletComponent } from './layout-outlet/layout-outlet.component';
import { UserProfileMenuComponent } from './header/user-profile-menu/user-profile-menu.component';
import { UsermanagementRoutingModule } from '../../modules/usermanagement/usermanagement-routing.module';
import { CustomermanagementRoutingModule } from '../../modules/customermanagement/customermanagement-routing.module';
import { I18nModule } from '../i18n/i18n.module';
import { TranslateModule } from '@ngx-translate/core';
import { ContactModule } from 'src/app/modules/contact/contact.module';
import { RouterModule } from '@angular/router';
import { ReportsRoutingModule } from 'src/app/modules/reports/reports-routing.module';
import { ContactRoutingModule } from 'src/app/modules/contact/contact-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/utils/interceptor/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/utils/interceptor/error.interceptor';
import { fakeBackendProvider } from 'src/app/utils/helpers/fake-backend';
import { UserSettingsRoutingModule } from 'src/app/modules/user-settings/user-settings-routing.module';


@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    MenuNavigationComponent, 
    LayoutOutletComponent, 
    UserProfileMenuComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UsermanagementRoutingModule,
    CustomermanagementRoutingModule,
    I18nModule,
    ContactRoutingModule,
    RouterModule,
    ReportsRoutingModule,
    UserSettingsRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
})
export class LayoutModule { }
