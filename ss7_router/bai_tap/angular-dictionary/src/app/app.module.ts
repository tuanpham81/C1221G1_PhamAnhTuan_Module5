import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordInfoComponent } from './word-info/word-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    WordInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
