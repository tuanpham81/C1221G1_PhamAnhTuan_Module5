import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: string;
  updateCustomerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
  }

  getCustomer(id: string) {
    return this.customerService.findById(id).subscribe(customer => {
      this.updateCustomerForm = new FormGroup({
        id: new FormControl(customer.id, [Validators.required, Validators.pattern(/^KH-[0-9]{4}$/)]),
        name: new FormControl(customer.name, Validators.required),
        idCardNumber: new FormControl(customer.idCardNumber, Validators.pattern('^\\d{9}$')),
        phone: new FormControl(customer.phone, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')),
        email: new FormControl(customer.email, Validators.email),
        address: new FormControl(customer.address),
        customerType: new FormControl(customer.customerType),
        gender: new FormControl(customer.gender),
        birthday: new FormControl(customer.birthday)
      });
    });
  }

  updateCustomer(id: string) {
    const customer = this.updateCustomerForm.value;
    console.log(this.updateCustomerForm);
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      this.route.navigate(['/customer/list']);
    });
  }
}
