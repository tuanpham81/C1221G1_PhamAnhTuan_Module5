import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../models/customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('nameSearch') nameSearch: ElementRef;
  @ViewChild('addressSearch') addressSearch: ElementRef;
  @ViewChild('typeSearch') typeSearch: ElementRef;
  idDel: string;
  nameDel: string;
  customerList: Customer[] = [];
  p: string | number;

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

  showDeleteModal(id: string, name: string) {
    this.idDel = id;
    this.nameDel = name;
  }

  deleteCustomer(idDel: string) {
    this.customerService.deleteCustomer(idDel).subscribe(() => {
      // this.router.navigate(['/customer/list']);
      this.ngOnInit();
    }, e => console.log(e));
  }

  search() {
    this.customerService.search(this.nameSearch.nativeElement.value,
      this.addressSearch.nativeElement.value,
      this.typeSearch.nativeElement.value).subscribe(
      customers => this.customerList = customers,
      e => console.log(e));
  }
}
