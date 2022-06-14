import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  createCustomerForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern(/^KH-[0-9]{4}$/)]),
    name: new FormControl('', Validators.required),
    idCardNumber: new FormControl('', Validators.pattern(/^\\d{9}$/)),
    phone: new FormControl('', Validators.pattern(/^((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}$/)),
    email: new FormControl('', Validators.email),
    address: new FormControl(''),
    customerType: new FormControl(''),
    gender: new FormControl(''),
    birthday: new FormControl('')
  });

  constructor(private customerService: CustomerService, private routes: Router) {
  }

  ngOnInit(): void {
  }

  createCustomer() {
    const customer = this.createCustomerForm.value;
    this.customerService.saveCustomer(customer);
    this.createCustomerForm.reset();
    console.log(customer);
    this.routes.navigate(['/customer-list']);
  }
}
