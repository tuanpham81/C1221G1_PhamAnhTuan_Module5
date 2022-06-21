import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/car';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(API_URL + '/cars');
  }

  saveCar(car): Observable<Car> {
    return this.http.post<Car>(API_URL + '/cars', car);
  }

  findById(id: string): Observable<Car> {
    return this.http.get<Car>(`${API_URL}/cars/${id}`);
  }

  updateCar(id: string, car: Car): Observable<Car> {
    return this.http.put<Car>(`${API_URL}/cars/${id}`, car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(`${API_URL}/cars/${id}`);
  }

  search(value: any, value2: any) {
    return this.http.get<Car[]>(`${API_URL}/cars?id_like=${value}&name_like=${value2}`);

  }
}
