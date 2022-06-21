import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from '../model/transaction';
import {map} from 'rxjs/operators';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(API_URL + '/transactions');
  }

  saveTrans(transaction): Observable<Transaction> {
    return this.http.post<Transaction>(API_URL + '/transactions', transaction);
  }

  findById(id: string): Observable<Transaction> {
    console.log('111111');
    return this.http.get<Transaction>(`${API_URL}/transactions/${id}`);
  }

  updateTrans(id: string, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${API_URL}/transactions/${id}`, transaction);
  }

  deleteTrans(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(`${API_URL}/transactions/${id}`);
  }

  search(value: any, value2: any): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${API_URL}/transactions?id_like=${value}&customer.name_like=${value2}`);
  }

  checkIdNotTaken(id: number): Observable<boolean> {
    return this.http.get(API_URL).pipe(
      map((trans: Array<Transaction>) =>
        trans.filter(tr => tr.id === id)
      ),
      map(trans => !trans.length
      )
    );
  }
}
