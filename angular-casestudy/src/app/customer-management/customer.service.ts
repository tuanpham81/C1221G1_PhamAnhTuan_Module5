import { Injectable } from '@angular/core';
import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
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

  saveCustomer(product): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', product);
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }

  search(value: any, value2: any, value3: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customers?name_like=${value}&address_like=${value2}&customerType_like=${value3}`);
  }
}
