import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  id: string;
  updateFacilityForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit(): void {
  }

  getFacility(id: string) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.updateFacilityForm = new FormGroup({
        id: new FormControl(facility.id, Validators.required),
        name: new FormControl(facility.name, Validators.required),
        area: new FormControl(facility.area, Validators.required),
        cost: new FormControl(facility.cost, Validators.required),
        maxPeople: new FormControl(facility.maxPeople, Validators.required),
        rentType: new FormControl(facility.rentType, Validators.required),
        serviceType: new FormControl(facility.serviceType, Validators.required),
        standard: new FormControl(facility.standard, Validators.required),
        otherConvenient: new FormControl(facility.otherConvenient, Validators.required),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.min(0)]),
        floorNumber: new FormControl(facility.floorNumber, [Validators.required, Validators.min(0)]),
        imgSource: new FormControl(facility.imgSource, Validators.required)
      });
    });
  }

  updateFacility(id: string) {
    const facility = this.updateFacilityForm.value;
    console.log(facility);
    this.facilityService.updateFacility(id, facility);
    this.route.navigate(['/facility/list']);
  }
}
