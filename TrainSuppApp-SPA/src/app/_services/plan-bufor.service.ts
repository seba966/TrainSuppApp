import { Injectable, Input } from '@angular/core';
import { Plan } from '../_dtos/plan';
import { Day } from '../_dtos/day';
import { Exercise } from '../_dtos/exercise';
import { Set } from '../_dtos/set';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { PlaningService } from './planing.service';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class PlanBuforService {
  currentPlanId: number;
  currentPlanIdObserver = new BehaviorSubject<number>(7777777);

  currentDays: Day[];
  currentExercises: Exercise[];

  currentDaysObserver = new BehaviorSubject<Day[]>([]);
  currentExercisesObserver = new BehaviorSubject<Exercise[]>([]);

  constructor(private planingService: PlaningService, private alertify: AlertifyService) { }

  setCurrentPlanId(planId: any) {
    this.currentPlanId = planId;
    this.currentPlanIdObserver.next(this.currentPlanId);
  }

  getCurrentPlanId() {
    return this.currentPlanIdObserver.asObservable();
  }
   //////////////////////////////////////////////////////////////////////////////////////// s
  setCurrentDays(days: any) {
    this.currentDays = days;
    this.currentDaysObserver.next(this.currentDays);
  }

  getCurrentDays() {
    return this.currentDaysObserver.asObservable();
  }

  setCurrentExercises(exercises: any) {
    this.currentExercises = exercises;
    this.currentExercisesObserver.next(this.currentExercises);
  }

  getCurrentExercises() {
    return this.currentExercisesObserver.asObservable();
  }

  clearCurrentDays() {
    this.currentDays = [];
    this.currentDaysObserver.next(this.currentDays);
  }

}
