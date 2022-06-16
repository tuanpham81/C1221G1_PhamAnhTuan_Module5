import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class FacilityModule { }
