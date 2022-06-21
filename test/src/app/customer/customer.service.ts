import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Transaction} from '../model/transaction';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Customer} from '../model/customer';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }
}
