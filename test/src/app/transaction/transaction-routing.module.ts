import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionCreateComponent} from './transaction-create/transaction-create.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionEditComponent} from './transaction-edit/transaction-edit.component';


const routes: Routes = [
  {path: 'list', component: TransactionListComponent},
  {path: 'create', component: TransactionCreateComponent},
  {path: 'edit/:id', component: TransactionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
