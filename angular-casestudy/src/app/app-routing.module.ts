import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CustomerListComponent} from './customer-management/customer-list/customer-list.component';
import {CustomerEditComponent} from './customer-management/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer-management/customer-create/customer-create.component';
import {FacilityListComponent} from './faiclity-management/facility-list/facility-list.component';
import {FacilityEditComponent} from './faiclity-management/facility-edit/facility-edit.component';
import {ContractListComponent} from './contract-management/contract-list/contract-list.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-edit/:id', component: FacilityEditComponent},
  {path: 'contract-list', component: ContractListComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
