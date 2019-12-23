import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PlaningService } from 'src/app/_services/planing.service';
import { Plan } from 'src/app/_dtos/plan';
import { Day } from 'src/app/_dtos/day';
import { PlanBuforService } from 'src/app/_services/plan-bufor.service';
import { ChangesDoneService } from 'src/app/_services/changes-done.service';

@Component({
  selector: 'app-add-day',
  templateUrl: './add-day.component.html',
  styleUrls: ['./add-day.component.css']
})
export class AddDayComponent implements OnInit {
  day: any = {};
  @Output() cancelDay = new EventEmitter();
  @Output() finishCreatingPlan = new EventEmitter();

  constructor(private planingService: PlaningService, private alertify: AlertifyService,
              private authService: AuthService, private planBufor: PlanBuforService,
              private changes: ChangesDoneService) { }
  daysOfWeek = ['Poniedziałek', 'Wtorek', 'Środa',
  'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  exerciseMode = false;

  plan: Plan;
  userId: number = this.authService.decodedToken.nameid;
  days: Day[];


  ngOnInit() {
    this.planingService.getUsersPlan(this.userId).subscribe((plan: Plan) => {
      this.plan = plan;
      this.planBufor.setCurrentPlanId(this.plan.id);
    }, error => {
      // this.alertify.error(error);
    });

  }

  exerciseToggle() {
    this.day.planId = this.plan.id;
    this.planingService.addElement('days', this.day).subscribe(() => {
      this.alertify.success('Dodano dzień');
      this.getDays();
      this.exerciseMode = true;
    }, error => {
      this.alertify.error('Musisz wybrać dzień');
    });
  }

  getDays() {
    this.planingService.getPlansDays(this.plan.id).subscribe((days: Day[]) => {
      this.days = days;
      this.planBufor.setCurrentDays(days);
    }, error => {
      // this.alertify.error(error);
    });
    return this.days;
  }
  // currentDayId() {
  //   this.planingService.getPlansDay(this.plan.id).subscribe((currentDay: Day) => {
  //     this.currentDay = currentDay;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  //   return this.currentDay.id;
  // }

  cancelExerciseMode(exerciseMode: boolean) {
    this.exerciseMode = exerciseMode;
  }

  cancelCreatingPlan(exerciseMode: boolean) {
    this.exerciseMode = exerciseMode;
    this.cancel();
  }


  cancel() {
    this.cancelDay.emit(false);
  }

  finishCreating(exerciseMode: boolean) { {
    this.exerciseMode = exerciseMode;
    this.finishCreatingPlan.emit(false);
  }
  }


  addDay() {
    this.day.planId = this.plan.id;
    this.planingService.addElement('days', this.day).subscribe(() => {
      this.alertify.success('Dodano dzień');
    }, error => {
      // this.alertify.error('Musisz wybrać dzień');
    });
  }
}
