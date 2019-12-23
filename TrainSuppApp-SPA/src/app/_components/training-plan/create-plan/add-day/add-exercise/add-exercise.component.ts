import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PlaningService } from 'src/app/_services/planing.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Day } from 'src/app/_dtos/day';
import { PlanBuforService } from 'src/app/_services/plan-bufor.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  @Output() cancelExercise = new EventEmitter();
  @Output() cancelCreatingPlan = new EventEmitter();
  @Output() finishCreatingPlan = new EventEmitter();
  @Input() planId: number;
  exercise: any = {};
  currentDay: Day;
  days: Day[];
  currentPlanId: number;

  constructor(private planingService: PlaningService, private alertify: AlertifyService, private planBufor: PlanBuforService,
              private router: Router) {
    this.planBufor.getCurrentPlanId().subscribe(planId => this.currentPlanId = planId);
  }

  ngOnInit() {

  }

  cancel() {
    this.cancelExercise.emit(false);
  }

  cancelCreating() {
    this.cancelCreatingPlan.emit(false);
  }

  getDayIdAndAddExercise() {
    this.planingService.getPlansDay(this.planId).subscribe((currentDay: Day) => {
      this.currentDay = currentDay;
      this.addExercise();
    }, error => {
      // this.alertify.error(error);
    });
  }

  addExercise() {
    this.exercise.dayId = this.currentDay.id;
    this.planingService.addElement('exercises', this.exercise).subscribe(() => {
      this.getDaysAndExercises();
      this.alertify.success('Dodano ćwiczenie');
      this.exercise = {};
    }, error => {
      this.alertify.error('Wypełnij wszystkie pola');
    });
  }

  getDaysAndExercises() {
    this.planingService.getPlansDays(this.currentPlanId).subscribe((days: Day[]) => {
      this.days = days;
      this.planBufor.setCurrentDays(days);
    }, error => {
        // this.alertify.error(error);
      });
    return this.days;
  }

  finishCreating() {
    this.finishCreatingPlan.emit(false);
  }
}
