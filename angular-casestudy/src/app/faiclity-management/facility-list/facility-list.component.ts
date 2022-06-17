import {Component, OnInit} from '@angular/core';
import {Facility} from '../../models/facility';
import {FacilityService} from '../facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  idDel: string;
  nameDel: string;
  facilityList: Facility[] = [];

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilityList = facilities;
    });
  }

  showDeleteModal(id: string, name: string) {
    this.idDel = id;
    this.nameDel = name;
  }

  deleteFacility(idDel: string) {
    this.facilityService.deleteFacility(idDel).subscribe(() => {
      // this.router.navigate(['/customers/list']);
      this.ngOnInit();
    }, e => console.log(e));
  }
}

