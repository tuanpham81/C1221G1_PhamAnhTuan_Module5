import {Customer} from './customer';

export interface Transaction {
  id: number;
  customer: Customer;
  date: string;
  serviceType: string;
  price: string;
  area: string;
}
