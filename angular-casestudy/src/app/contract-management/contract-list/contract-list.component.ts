import {Component, OnInit} from '@angular/core';
import {Contract} from '../../models/contract';
import {ContractService} from '../contract.service';

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
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe(contracts => {
      this.contractList = contracts;
    });
  }
}
