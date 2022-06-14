import { Injectable } from '@angular/core';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];
  constructor() {
    this.customerList.push({
      id: 'KH-002',
      name: 'Nguyễn Thị Hào',
      gender: 'Nữ',
      birthday: '1970-11-07',
      idCardNumber: '643431213',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      phone: '0945423362',
      email: 'thihao07@gmail.com',
      customerType: 'Gold'
    });

    this.customerList.push({
      id: 'KH-003',
      name: 'Phạm Xuân Diệu',
      gender: 'Nữ',
      birthday: '1992-08-08',
      idCardNumber: '865342123',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      phone: '0954333333',
      email: 'xuandieu92@gmail.com',
      customerType: 'Diamond'
    });

    this.customerList.push({
      id: 'KH-004',
      name: 'Trương Đình Nghệ',
      gender: 'Nam',
      birthday: '1990-02-27',
      idCardNumber: '488645199',
      address: 'nghenhan2702@gmail.com',
      phone: '0373213122',
      email: 'nghenhan2702@gmail.com',
      customerType: 'Member'
    });

    this.customerList.push({
      id: 'KH-005',
      name: 'Nguyễn Tâm Đắc',
      gender: 'Nam',
      birthday: '1989-07-01',
      idCardNumber: '344343432',
      address: '22 Ngô Quyền, Đà Nẵng',
      phone: '0987654321',
      email: 'dactam@gmail.com',
      customerType: 'Platinum'
    });

    this.customerList.push({
      id: 'KH-006',
      name: 'Nguyễn Thị Hào',
      gender: 'Nữ',
      birthday: '1999-04-08',
      idCardNumber: '965656433',
      address: '55 Nguyễn Văn Linh, Kon Tum',
      phone: '0763212345',
      email: 'haohao99@gmail.com',
      customerType: 'Platinum'
    });
  }

  getAll() {
    return this.customerList;
  }

  saveCustomer(customer) {
    this.customerList.push(customer);
  }

  findById(id: string) {
    return this.customerList.find(customer => customer.id === id);
  }

  updateProduct(id: string, customer: Customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList[i] = customer;
      }
    }
  }
}
