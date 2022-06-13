import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id: string;
  customer: string;
  facility: string;
  startDate: string;
  endDate: string;
  deposit: number;
}
