import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  // ngOnInit() {
  //   this.customerService.search('',
  //     '',
  //     '').subscribe(customers => this.customerList = customers,
  //     () => {});
  // }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    });
  }
}
