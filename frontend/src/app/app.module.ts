import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VolunteerRegComponent } from './volunteer-reg/volunteer-reg.component';
import { OwnerRegComponent } from './owner-reg/owner-reg.component';
import { DonorSearchComponent } from './donor-search/donor-search.component';
import { VolunteerSearchComponent } from './volunteer-search/volunteer-search.component';
import { DonorLocComponent } from './donor-loc/donor-loc.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VolunteerRegComponent,
    OwnerRegComponent,
    DonorSearchComponent,
    VolunteerSearchComponent,
    DonorLocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
