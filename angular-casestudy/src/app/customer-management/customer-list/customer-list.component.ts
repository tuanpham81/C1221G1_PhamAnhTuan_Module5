import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  idDel: string;
  nameDel: string;
  customerList: Customer[] = [];
  p: string | number;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.customerList = this.customerService.getAll();
  }

  showDeleteModal(id: string, name: string) {
    this.idDel = id;
    this.nameDel = name;
  }

  deleteCustomer(idDel: string) {
    this.customerService.deleteCustomer(idDel);
  }
}
