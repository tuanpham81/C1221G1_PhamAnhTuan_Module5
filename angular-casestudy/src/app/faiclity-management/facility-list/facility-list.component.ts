import {Component, OnInit} from '@angular/core';
import {Facility} from '../../models/facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  idDel: string;
  nameDel: string;
  facilityList: Facility[] = [];

  constructor(private facilityService: FacilityService) {}

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.facilityList = this.facilityService.getAll();
  }

  showDeleteModal(id: string, name: string) {
    this.idDel = id;
    this.nameDel = name;
  }

  deleteFacility(idDel: string) {
    this.facilityService.deleteFacility(idDel);
  }
}

