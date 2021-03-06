import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';
import {TreeModule} from 'primeng/tree';
import {DividerModule} from 'primeng/divider';

import { SvgIconsModule } from '@ngneat/svg-icon';
import { printIcon } from 'src/assets/svg/pin';
import { menuIcon } from 'src/assets/svg/menu';
import { pinBlankIcon } from 'src/assets/svg/pin-blank';
import { pinFilledIcon } from 'src/assets/svg/pin-filled';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AquaLandingComponent } from './aqua-landing/aqua-landing.component';
import { MessageService } from 'primeng/api';
import { PgAdminComponent } from './pg-admin/pg-admin.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { PgInfoComponent } from './pg-info/pg-info.component';
import { CommoditiesComponent } from './pg-admin/commodities/commodities.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AquaLandingComponent,
    PgAdminComponent,
    BreadcrumbComponent,
    FooterComponent,
    PgInfoComponent,
    CommoditiesComponent
  ],
  imports: [
    SvgIconsModule.forRoot({
      icons: [
        printIcon,menuIcon,pinBlankIcon,pinFilledIcon
      ]
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
    BreadcrumbModule,
    TabViewModule,
    DialogModule,
    RadioButtonModule,
    AutoCompleteModule,
    MultiSelectModule,
    TableModule,
    InputSwitchModule,
    CalendarModule,
    TreeModule,
    DividerModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
