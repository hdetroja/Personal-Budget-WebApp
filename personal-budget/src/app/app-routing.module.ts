import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JanuaryComponent } from './january/january.component';
import { AddJanuaryComponent } from './add-january/add-january.component';
import { AddFebruaryComponent } from './add-february/add-february.component';
import { AddMarchComponent } from './add-march/add-march.component';
import { AddAprilComponent } from './add-april/add-april.component';
import { AddMayComponent } from './add-may/add-may.component';
import { AddJuneComponent } from './add-june/add-june.component';
import { AddJulyComponent } from './add-july/add-july.component';
import { AddAugustComponent } from './add-august/add-august.component';
import { AddSeptemberComponent } from './add-september/add-september.component';
import { AddOctoberComponent } from './add-october/add-october.component';
import { AddNovemberComponent } from './add-november/add-november.component';
import { AddDecemberComponent } from './add-december/add-december.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'january',
    component: AddJanuaryComponent
  },
  {
    path:'february',
    component: AddFebruaryComponent
  },
  {
    path:'march',
    component: AddMarchComponent
  },
  {
    path:'april',
    component: AddAprilComponent
  },
  {
    path:'may',
    component: AddMayComponent
  },
  {
    path:'june',
    component: AddJuneComponent
  },
  {
    path:'july',
    component: AddJulyComponent
  },
  {
    path:'august',
    component: AddAugustComponent
  },
  {
    path:'september',
    component: AddSeptemberComponent
  },
  {
    path:'october',
    component: AddOctoberComponent
  },
  {
    path:'november',
    component: AddNovemberComponent
  },
  {
    path:'december',
    component: AddDecemberComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
