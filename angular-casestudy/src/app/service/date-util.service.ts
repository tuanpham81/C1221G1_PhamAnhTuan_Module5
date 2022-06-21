import { Injectable } from '@angular/core';
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  isBefore,
  parseISO
} from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  isBefore(value: string) {
    return isBefore(parseISO(value), Date.now());
  }
}
