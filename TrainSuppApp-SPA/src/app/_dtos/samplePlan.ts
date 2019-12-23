import { Day } from './day';

export interface SamplePlan {
  id: number;
  goal: string;
  name: string;
  days: Day[];
}
