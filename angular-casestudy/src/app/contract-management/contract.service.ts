import {Injectable} from '@angular/core';
import {Contract} from '../models/contract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts');
  }

  saveContract(product): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contracts', product);
  }
}
