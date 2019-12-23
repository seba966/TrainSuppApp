import { Exercise } from './exercise';

export interface Day {
  id: number;
  name: string;
  planId: number;
  exercises: Exercise[];
  samplePlanId: number;
}
