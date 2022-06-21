import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarListComponent} from './car-list/car-list.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import { CarCreateComponent } from './car-create/car-create.component';


@NgModule({
  declarations: [
    CarListComponent,
    CarEditComponent,
    CarCreateComponent
  ],
    imports: [
        CommonModule,
        CarRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  // providers: [SortService]
})
export class CarModule { }
