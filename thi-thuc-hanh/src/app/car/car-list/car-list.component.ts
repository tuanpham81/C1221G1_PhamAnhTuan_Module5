import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Car} from '../../models/car';
import {CarService} from '../../service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  idDel: number;
  nameDel: string;
  carList: Car[] = [];
  totalPages: number;
  currentPage: number;
  idSearch: string;
  nameSearch: string;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getAll({page: 0, size: 2});
  }

  getAll(request) {
    this.carService.getAll(request).subscribe(cars => {
      this.carList = cars['content'];
      this.currentPage = cars['number'];
      this.totalPages = cars['totalPages'];
    });
  }

  showDeleteModal(id: number, name: string) {
    this.idDel = id;
    this.nameDel = name;
  }

  deleteCar(idDel: number) {
    this.carService.deleteCar(idDel).subscribe(() => {
      this.ngOnInit();
    }, e => console.log(e));
  }

  previousPage() {
    const request = {};
    if ((this.currentPage) > 0) {
      request['page'] = this.currentPage - 1;
      request['size'] = 5;
      request['id'] = this.idSearch;
      request['name'] = this.nameSearch;
      this.getAll(request);
    }
  }

  nextPage() {
    const request = {};
    if ((this.currentPage + 1) < this.totalPages) {
      request['page'] = this.currentPage - 1;
      request['size'] = 5;
      request['id'] = this.idSearch;
      request['name'] = this.nameSearch;
      this.getAll(request);
    }
  }

  search(idSearch: HTMLInputElement, nameSearch: HTMLInputElement) {
    this.idSearch = idSearch.value;
    this.nameSearch = nameSearch.value;
    this.getAll({page: 0, size: 2, id: this.idSearch, name: this.nameSearch});
  }
}
