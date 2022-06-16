import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'customer', loadChildren: () => import('./customer-management/customer.module').then(module => module.CustomerModule)},
  {path: 'facility', loadChildren: () => import('./faiclity-management/facility.module').then(module => module.FacilityModule)},
  {path: 'contract', loadChildren: () => import('./contract-management/contract.module').then(module => module.ContractModule)}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
