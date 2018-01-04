import {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgxCropperModule } from 'ngx-cropper';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { CareersComponent } from './careers/careers.component';
import { RegistrationComponent } from './registration/registration.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServerComponent } from './server/server.component';
import { ServerEditComponent } from './server-edit/server-edit.component';


import { MessageService } from './_services/message.service';
import {CommonService} from './_services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    CareersComponent,
    RegistrationComponent,
    ServerComponent,
    ServerEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    NgxCropperModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MessageService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
