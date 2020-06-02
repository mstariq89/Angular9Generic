import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LayoutModule } from './shared/layout/layout.module';
import { DecimalPipe } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './utils/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './utils/interceptor/error.interceptor';
import { fakeBackendProvider } from './utils/helpers/fake-backend';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgxSpinnerModule,
    AuthModule
  ],
  providers: [
    DecimalPipe,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})  
export class AppModule { }
