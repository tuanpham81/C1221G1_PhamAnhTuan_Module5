import {Component, OnInit} from '@angular/core';
import {Contract} from '../../contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];

  constructor() {
    this.contractList.push({
      id: 'HD-001', customer: 'KH-002', facility: '1', startDate: '2022-03-14',
      endDate: '2022-04-22', deposit: 5000000
    });
    this.contractList.push({
      id: 'HD-002', customer: 'KH-003', facility: '2', startDate: '2022-04-14',
      endDate: '2022-04-22', deposit: 3000000
    });
    this.contractList.push({
      id: 'HD-003', customer: 'KH-004', facility: '3', startDate: '2022-06-24',
      endDate: '2022-07-22', deposit: 7000000
    });

  }

  ngOnInit(): void {
  }

}
