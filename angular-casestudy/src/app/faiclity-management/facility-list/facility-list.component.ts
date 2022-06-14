import {Component, OnInit} from '@angular/core';
import {Facility} from '../../models/facility';

@Component({
  selector: 'app-service-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [];

  constructor() {
    this.facilityList.push({
      id: '1',
      name: 'Villa Beach Front',
      area: 25000,
      cost: 1000000,
      maxPeople: 10,
      standard: 'vip',
      otherConvenient: 'hồ bơi',
      poolArea: 500,
      floorNumber: 4,
      rentType: 'ngày',
      serviceType: 'villa',
      imgSource: './assets/img/room-1.jpg'
    });
    this.facilityList.push({
      id: '2',
      name: 'House Princess 01',
      area: 14000,
      cost: 500000,
      maxPeople: 7,
      standard: 'vip',
      otherConvenient: 'bếp nướng',
      poolArea: null,
      floorNumber: 3,
      rentType: 'ngày',
      serviceType: 'villa',
      imgSource: './assets/img/room-2.jpg'
    });
    this.facilityList.push({
      id: '3',
      name: 'Room Twin 01',
      area: 5000,
      cost: 100000,
      maxPeople: 2,
      standard: 'normal',
      otherConvenient: 'tivi',
      poolArea: null,
      floorNumber: null,
      rentType: 'giờ',
      serviceType: 'room',
      imgSource: './assets/img/room-3.jpg'
    });
    this.facilityList.push({
      id: '4',
      name: 'Villa NO Beach Front',
      area: 22000,
      cost: 9000000,
      maxPeople: 8,
      standard: 'normal',
      otherConvenient: 'hồ bơi',
      poolArea: 300,
      floorNumber: 3,
      rentType: 'ngày',
      serviceType: 'villa',
      imgSource: './assets/img/room-1.jpg'
    });
    this.facilityList.push({
      id: '5',
      name: 'House Princess 02',
      area: 10000,
      cost: 4000000,
      maxPeople: 5,
      standard: 'normal',
      otherConvenient: 'bếp nướng',
      poolArea: null,
      floorNumber: 2,
      rentType: 'ngày',
      serviceType: 'House',
      imgSource: './assets/img/room-2.jpg'
    });
    this.facilityList.push({
      id: '6',
      name: 'Room Twin 02',
      area: 3000,
      cost: 900000,
      maxPeople: 2,
      standard: 'normal',
      otherConvenient: 'tivi',
      poolArea: null,
      floorNumber: null,
      rentType: 'ngày',
      serviceType: 'Room',
      imgSource: './assets/img/room-2.jpg'
    });
  }

  ngOnInit(): void {
  }
}

