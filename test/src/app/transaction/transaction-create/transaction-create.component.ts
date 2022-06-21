import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../../customer/customer.service';
import {TransactionService} from '../transaction.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  customerList: Customer[] = [];
  transCreateForm = new FormGroup({
    // id: new FormControl('', [Validators.required], [this.checkDuplicateId(this.transactionService)]),
    id: new FormControl('', [Validators.required]),
    customer: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    serviceType: new FormControl('', Validators.required),
  });
  check: boolean;

  constructor(private customerService: CustomerService,
              private transactionService: TransactionService,
              private routes: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  createTrans() {
    const trans = this.transCreateForm.value;
    this.transactionService.saveTrans(trans).subscribe(() => {
      this.transCreateForm.reset();
    }, e => console.log(e));
    // this.transCreateForm.reset();
    console.log(trans);
    this.ngOnInit();
    this.routes.navigate(['/transaction/list']);
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    });
  }

  checkDuplicateId(transactionService: TransactionService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return transactionService.checkIdNotTaken(control.value)
        .pipe(
          map((result) => {
              return result ? null : {isExisted: true};
            }
          )
        );
    };
  }
}
