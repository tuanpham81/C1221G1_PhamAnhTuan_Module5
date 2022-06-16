import {Injectable} from '@angular/core';
import {Contract} from '../models/contract';
import {CustomerService} from '../customer-management/customer.service';
import {FacilityService} from '../faiclity-management/facility.service';
import {Facility} from '../models/facility';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [];

  constructor(private customerService: CustomerService, private facilityService: FacilityService) {
    this.contractList.push({
      id: 'HD-001', customer: customerService.findById('KH-002'), facility: facilityService.findById('1'), startDate: '2022-03-14',
      endDate: '2022-04-22', deposit: 5000000
    });
    this.contractList.push({
      id: 'HD-002', customer: customerService.findById('KH-003'), facility: facilityService.findById('2'), startDate: '2022-04-14',
      endDate: '2022-04-22', deposit: 3000000
    });
    this.contractList.push({
      id: 'HD-003', customer: customerService.findById('KH-004'), facility: facilityService.findById('3'), startDate: '2022-06-24',
      endDate: '2022-07-22', deposit: 7000000
    });
  }
  getAll() {
    return this.contractList;
  }

  saveContract(contract: Contract) {
    this.contractList.push(contract);
  }

  // findById(id: string) {
  //   return this.contractList.find(facility => facility.id === id);
  // }
  //
  // updateContract(id: string, contract: Contract) {
  //   for (let i = 0; i < this.contractList.length; i++) {
  //     if (this.contractList[i].id === id) {
  //       this.contractList[i] = contract;
  //     }
  //   }
  // }

  deleteContract(idDel: string) {
    for (let i = 0; i < this.contractList.length; i++) {
      if (this.contractList[i].id === idDel) {
        this.contractList.splice(i, 1);
      }
    }
  }
}
