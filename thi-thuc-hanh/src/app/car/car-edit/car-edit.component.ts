import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../service/car.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StartPointService} from '../../service/start-point.service';
import {StartPoint} from '../../models/start-point';
import {EndPoint} from '../../models/end-point';
import {EndPointService} from '../../service/end-point.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id: string;
  updateCarForm: FormGroup;
  startPointList: StartPoint[] = [];
  endPointList: EndPoint[] = [];

  constructor(private carService: CarService,
              private startPointService: StartPointService,
              private endPointService: EndPointService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getCar(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllStartPoint();
    this.getAllEndPoint();
  }

  getCar(id: string) {
    return this.carService.findById(id).subscribe(car => {
      this.updateCarForm = new FormGroup({
        id: new FormControl(car.id, Validators.required),
        type: new FormControl(car.type, Validators.required),
        name: new FormControl(car.name, Validators.required),
        startPoint: new FormControl(car.startPoint.name, Validators.required),
        endPoint: new FormControl(car.endPoint.name, Validators.required),
        phone: new FormControl(car.phone, [Validators.required, Validators.pattern('^(090|093|097)+([0-9]{7})$')]),
        email: new FormControl(car.email, [Validators.required, Validators.email]),
        startTime: new FormControl(car.startTime, [Validators.required, Validators.min(5), Validators.max(22)]),
        endTime: new FormControl(car.endTime, [Validators.required, Validators.min(5), Validators.max(22)])
      });
    });
  }

  updateCar(id: string) {
    const car = this.updateCarForm.value;
    console.log(this.updateCarForm);
    this.carService.updateCar(id, car).subscribe(() => {
      this.route.navigate(['/car/list']);
    });
  }

  getAllStartPoint() {
    this.startPointService.getAll().subscribe(startPoints => {
      this.startPointList = startPoints;
    });
  }

  getAllEndPoint() {
    this.endPointService.getAll().subscribe(endPoints => {
      this.endPointList = endPoints;
    });
  }
}
