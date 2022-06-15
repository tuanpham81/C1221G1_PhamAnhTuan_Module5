import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  createFacilityForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    maxPeople: new FormControl('', Validators.required),
    rentType: new FormControl('', Validators.required),
    serviceType: new FormControl('', Validators.required),
    standard: new FormControl('', Validators.required),
    otherConvenient: new FormControl('', Validators.required),
    poolArea: new FormControl('', [Validators.required, Validators.min(0)]),
    floorNumber: new FormControl('', [Validators.required, Validators.min(0)]),
    imgSource: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  createFacility() {

  }
}
