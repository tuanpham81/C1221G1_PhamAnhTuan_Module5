import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StartPoint} from '../models/start-point';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class StartPointService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<StartPoint[]> {
    return this.http.get<StartPoint[]>(API_URL + '/startPoints');
  }
}
