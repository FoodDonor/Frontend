import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OwnerRegComponent } from './owner-reg/owner-reg.component';
import { OwnerLocComponent } from './owner-loc/owner-loc.component';
import { VolunteerRegComponent } from './volunteer-reg/volunteer-reg.component';
import { VolunteerSearchComponent } from './volunteer-search/volunteer-search.component';
import { DonorSearchComponent } from './donor-search/donor-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'ownerReg', component: OwnerRegComponent},
  {path: 'ownerLoc', component: OwnerLocComponent},
  {path: 'volunteerReg', component: VolunteerRegComponent},
  {path: 'volunteerSearch', component: VolunteerSearchComponent},
  {path: 'donorSearch', component: DonorSearchComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
