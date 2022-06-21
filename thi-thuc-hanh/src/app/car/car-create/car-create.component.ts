import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CarService} from '../../service/car.service';
import {StartPointService} from '../../service/start-point.service';
import {EndPointService} from '../../service/end-point.service';
import {StartPoint} from '../../models/start-point';
import {EndPoint} from '../../models/end-point';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  startPointList: StartPoint[] = [];
  endPointList: EndPoint[] = [];
  createCarForm = new FormGroup({
      id: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      startPoint: new FormControl('', Validators.required),
      endPoint: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|093|097)+([0-9]{7})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      startTime: new FormControl('', [Validators.required, Validators.min(5), Validators.max(22)]),
      endTime: new FormControl('', [Validators.required, Validators.min(5), Validators.max(22)])
    });

  constructor(private carService: CarService,
              private startPointService: StartPointService,
              private endPointService: EndPointService,
              private routes: Router) {
  }

  ngOnInit(): void {
    this.getAllEndPoint();
    this.getAllStartPoint();
  }

  createCar() {
    const car = this.createCarForm.value;
    this.carService.saveCar(car).subscribe(() => {
      this.routes.navigate(['/car/list']);
      this.ngOnInit();
      console.log(car);
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
