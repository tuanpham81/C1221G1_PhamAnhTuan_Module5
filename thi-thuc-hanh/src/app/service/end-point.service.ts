import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StartPoint} from '../models/start-point';
import {EndPoint} from '../models/end-point';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EndPointService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<EndPoint[]> {
    return this.http.get<EndPoint[]>(API_URL + '/endPoints');
  }
}
