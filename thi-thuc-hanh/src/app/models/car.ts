import {StartPoint} from './start-point';

export interface Car {
  id: number;
  type: string;
  name: string;
  startPoint: StartPoint;
  endPoint: StartPoint;
  phone: string;
  email: string;
  startTime: string;
  endTime: string;
}
