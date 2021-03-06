import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../models/facility';
import {Customer} from '../../models/customer';
import {FacilityService} from '../../faiclity-management/facility.service';
import {CustomerService} from '../../customer-management/customer.service';
import {ContractService} from '../contract.service';
import {Router} from '@angular/router';
import {DateUtilService} from '../../service/date-util.service';

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
    startDate: new FormControl('', [Validators.required, this.isStartDayBefore]),
    endDate: new FormControl('', Validators.required),
    deposit: new FormControl('', Validators.required),
  });
  sDate: string;

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private dateUtilService: DateUtilService,
              private routes: Router) { }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllFacility();
  }

  createContract() {
    const contract = this.contractCreateForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.contractCreateForm.reset();
    }, e => console.log(e));

    this.contractCreateForm.reset();
    console.log(contract);
    this.routes.navigate(['/facility/list']);
  }
  getAllCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    });
  }
  getAllFacility() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilityList = facilities;
    });
  }

  isStartDayBefore(value: AbstractControl) {
    const start = value.get('sDate').value;
    if (this.dateUtilService.isBefore(start)) {
      return {notAfter: true};
    } else {
      return null;
    }
  }
}
