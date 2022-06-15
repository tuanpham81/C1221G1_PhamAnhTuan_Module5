import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../models/facility';
import {Customer} from '../../models/customer';
import {ContractService} from '../contract.service';
import {FacilityService} from '../../faiclity-management/facility.service';
import {CustomerService} from '../../customer-management/customer.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  facilityList: Facility[] = [];
  customerList: Customer[] = [];

  contractCreateForm = new FormGroup({
    id: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    facility: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    deposit: new FormControl('', Validators.required),
  });

  constructor(private facilityService: FacilityService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

  createContract() {

  }
}
