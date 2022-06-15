import {Component, OnInit} from '@angular/core';
import {Contract} from '../../models/contract';
import {ContractService} from '../contract.service';
import {Facility} from '../../models/facility';
import {Customer} from '../../models/customer';
import {FacilityService} from '../../faiclity-management/facility.service';
import {CustomerService} from '../../customer-management/customer.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  constructor(private contractService: ContractService) {
  }

  ngOnInit() {
    this.contractList = this.contractService.getAll();
  }
  deleteContract(idDel: string) {
    this.contractService.deleteContract(idDel);
  }
}
