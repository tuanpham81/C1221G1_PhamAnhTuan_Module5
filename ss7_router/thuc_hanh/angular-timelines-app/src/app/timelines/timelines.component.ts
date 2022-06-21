import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../service/date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  output = '';
  output2: boolean;
  output3: boolean;

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }


  isValid(value, value2) {
    this.output2 = this.dateUtilService.diffInDay(value, value2)
  }

  isBefore(value: string) {
    this.output3 = this.dateUtilService.isBefore(value)

  }
}
