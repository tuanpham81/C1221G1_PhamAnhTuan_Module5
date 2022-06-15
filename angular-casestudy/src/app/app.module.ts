import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerListComponent } from './customer-management/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-management/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-management/customer-create/customer-create.component';
import { FacilityListComponent } from './faiclity-management/facility-list/facility-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FacilityEditComponent } from './faiclity-management/facility-edit/facility-edit.component';
import { ContractListComponent } from './contract-management/contract-list/contract-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FacilityCreateComponent } from './faiclity-management/facility-create/facility-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    FacilityListComponent,
    HomepageComponent,
    FacilityEditComponent,
    ContractListComponent,
    NotFoundComponent,
    FacilityCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
