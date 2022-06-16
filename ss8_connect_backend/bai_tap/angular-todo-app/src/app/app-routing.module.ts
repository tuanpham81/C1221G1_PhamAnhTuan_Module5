import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoUpdateComponent} from './todo-update/todo-update.component';


const routes: Routes = [
  {path: 'edit/:id', component: TodoUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
