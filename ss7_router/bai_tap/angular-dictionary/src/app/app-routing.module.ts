import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordListComponent} from './word-list/word-list.component';
import {WordInfoComponent} from './word-info/word-info.component';


const routes: Routes = [
  {path: 'words', component: WordListComponent},
  {path: 'info/:id', component: WordInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
