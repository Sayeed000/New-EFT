import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBodyComponent } from './nav-body/nav-body.component';
import { NavSidenavComponent } from './nav-sidenav/nav-sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutwardModuleComponent } from './outward-module/outward-module.component';
import { InwardModuleComponent } from './inward-module/inward-module.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBodyComponent,
    NavSidenavComponent,
    DashboardComponent,
    OutwardModuleComponent,
    InwardModuleComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
