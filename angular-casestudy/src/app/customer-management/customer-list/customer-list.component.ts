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
  constructor(private customerService: CustomerService, private router: Router) {}

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
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === idDel) {
        this.customerList.splice(i, 1);
      }
    }
  }
}
