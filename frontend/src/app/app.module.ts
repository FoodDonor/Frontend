import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { routes } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VolunteerRegComponent } from './volunteer-reg/volunteer-reg.component';
import { OwnerRegComponent } from './owner-reg/owner-reg.component';
import { DonorSearchComponent } from './donor-search/donor-search.component';
import { VolunteerSearchComponent } from './volunteer-search/volunteer-search.component';
import { OwnerLocComponent } from './owner-loc/owner-loc.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VolunteerRegComponent,
    OwnerRegComponent,
    DonorSearchComponent,
    VolunteerSearchComponent,
    OwnerLocComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
