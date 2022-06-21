import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transaction} from '../../model/transaction';
import {TransactionService} from '../transaction.service';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  @ViewChild('idSearch') idSearch: ElementRef;
  @ViewChild('customerName') customerName: ElementRef;
  // @ViewChild('typeSearch') typeSearch: ElementRef;
  idDel: number;
  nameDel: string;
  transactionList: Transaction[] = [];
  p: string | number;

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.transactionService.getAll().subscribe(transactionList => {
      this.transactionList = transactionList;
    });
  }

  showDeleteModal(id: number, name: string) {
    this.idDel = id;
    this.nameDel = name;
  }

  deleteTrans(idDel: number) {
    this.transactionService.deleteTrans(idDel).subscribe(() => {
      this.ngOnInit();
    }, e => console.log(e));
  }

  search() {
    console.log(this.idSearch.nativeElement.value);
    this.transactionService.search(this.idSearch.nativeElement.value,
      this.customerName.nativeElement.value).subscribe(
        transactionList => this.transactionList = transactionList,
        e => console.log(e));
  }
}
