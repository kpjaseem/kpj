import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabViewModule} from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AquaLandingComponent } from './aqua-landing/aqua-landing.component';
import { MessageService } from 'primeng/api';
import { PgAdminComponent } from './pg-admin/pg-admin.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AquaLandingComponent,
    PgAdminComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
    BreadcrumbModule,
    TabViewModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
