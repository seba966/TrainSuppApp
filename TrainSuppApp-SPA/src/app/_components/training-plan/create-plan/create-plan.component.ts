import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../../../_services/alertify.service';
import { PlaningService } from 'src/app/_services/planing.service';
import { AuthService } from 'src/app/_services/auth.service';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import { PlanBuforService } from 'src/app/_services/plan-bufor.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {
  @Output() cancelCreating = new EventEmitter();
  @Output() finishCreatingPlan = new EventEmitter();
  model: any = {};
  goals: any[] = [{
    name: 'Zwiększenie siły',
    value: 'strength'
  }, {
    name: 'Zrzucenie wagi',
    value: 'reduction'
  }];
  dayMode = false;

  constructor(private planingService: PlaningService, private alertify: AlertifyService,
              private authService: AuthService, private planBufor: PlanBuforService) { }

  ngOnInit() {
  }

  dayToggle() {
    this.model.userId = this.authService.decodedToken.nameid;
    this.planingService.addElement('plans', this.model).subscribe(() => {
      this.alertify.success('Stworzono plan');
      this.dayMode = true;
    }, error => {
      this.alertify.error('Musisz wybrać cel treningowy');
    });

  }
  dropPlan() {
    this.model.userid = this.authService.decodedToken.nameid;
    this.planingService.dropPlan(this.authService.decodedToken.nameid).subscribe(() => {
      this.alertify.warning('Anulowano plan');
    }, error => {
      // this.alertify.error(error);
    });
    this.alertify.error('Usunięto plan');
    this.planBufor.clearCurrentDays();
    this.planBufor.setCurrentPlanId(0);
  }

  cancelDayMode(dayMode: boolean) {
    this.dropPlan();
    this.dayMode = dayMode;
  }

  cancel() {
    this.cancelCreating.emit(false);
  }

  finishCreating(dayMode: boolean) {
    this.dayMode = dayMode;
    this.finishCreatingPlan.emit(false);
  }
}
