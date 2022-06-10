import {Component, OnInit} from '@angular/core';
import {Facility} from '../../facility';

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
      serviceType: 'villa'
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
      serviceType: 'villa'
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
      serviceType: 'room'
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
      serviceType: 'villa'
    });
  }

  ngOnInit(): void {
  }

}
