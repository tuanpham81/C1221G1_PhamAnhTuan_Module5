import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Car} from '../../models/car';
import {CarService} from '../../service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @ViewChild('idSearch') idSearch: ElementRef;
  @ViewChild('nameSearch') nameSearch: ElementRef;
  idDel: number;
  nameDel: string;
  carList: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.carService.getAll().subscribe(cars => {
      this.carList = cars['content'];
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

  search() {
    this.carService.search(this.idSearch.nativeElement.value,
      this.nameSearch.nativeElement.value).subscribe(
      cars => this.carList = cars,
      e => console.log(e));
  }
}
