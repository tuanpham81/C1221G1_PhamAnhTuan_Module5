import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  createCustomerForm: FormGroup;

  constructor(private customerService: CustomerService, private routes: Router) {
  }

  ngOnInit(): void {
    console.log(this.customerService);
    this.createCustomerForm = new FormGroup({
        id: new FormControl('', [Validators.required, Validators.pattern(/^KH-[0-9]{4}$/)]),
        name: new FormControl('', Validators.required),
        idCardNumber: new FormControl('', Validators.pattern('^\\d{9}$')),
        phone: new FormControl('', Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')),
        email: new FormControl('', Validators.email),
        address: new FormControl(''),
        customerType: new FormControl(''),
        gender: new FormControl(''),
        birthday: new FormControl('')
      },
    );
  }

  createCustomer() {
    const customer = this.createCustomerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.createCustomerForm.reset();
      this.ngOnInit();
      this.routes.navigate(['/customer/list']);
      console.log(customer);
    });
  }
}
