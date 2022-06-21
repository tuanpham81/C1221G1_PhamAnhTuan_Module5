import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TransactionService} from '../transaction.service';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../customer/customer.service';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  id: string;
  updateTransForm: FormGroup;
  customerList: Customer[];

  constructor(private transactionService: TransactionService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getTrans(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getTrans(id: string) {
    return this.transactionService.findById(id).subscribe(transaction => {
      this.updateTransForm = new FormGroup({
        id: new FormControl(transaction.id, Validators.required),
        customer: new FormControl(transaction.customer.name, Validators.required),
        serviceType: new FormControl(transaction.serviceType, Validators.required),
        price: new FormControl(transaction.price, Validators.required),
        date: new FormControl(transaction.date, Validators.required),
      });
    });
  }

  updateTrans(id: string) {
    const transaction = this.updateTransForm.value;
    console.log(this.updateTransForm);
    this.transactionService.updateTrans(id, transaction).subscribe(() => {
      this.route.navigate(['/transaction/list']);
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    });
  }
}
