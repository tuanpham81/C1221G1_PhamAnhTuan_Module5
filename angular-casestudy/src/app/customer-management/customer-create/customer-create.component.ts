import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {Customer} from '../../customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  createCustomerForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern(/^KH-[0-9]{4}$/)]),
    name: new FormControl('', Validators.required),
    idCardNumber: new FormControl('', Validators.pattern(/^[0-9]{9|10}/)),
    phone: new FormControl('', Validators.pattern(/^((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}$/)),
    email: new FormControl('', Validators.email)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  createCustomer() {
  }
}
