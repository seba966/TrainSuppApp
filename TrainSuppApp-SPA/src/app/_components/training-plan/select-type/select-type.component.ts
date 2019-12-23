import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaningService } from 'src/app/_services/planing.service';
import { AuthService } from 'src/app/_services/auth.service';
import { PlanBuforService } from 'src/app/_services/plan-bufor.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SamplePlan } from 'src/app/_dtos/samplePlan';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.css']
})
export class SelectTypeComponent implements OnInit {
  @Output() cancelSelecting = new EventEmitter();
  model: any = {};
  goals: any[] = [{
    name: 'Zwiększenie siły',
    value: 'strength'
  }, {
    name: 'Zrzucenie wagi',
    value: 'reduction'
  }];
  selectingPlanMode = false;

  constructor(private planingService: PlaningService, private alertify: AlertifyService,
              private authService: AuthService, private planBufor: PlanBuforService) { }

  ngOnInit() {
  }

  selectingPlanToggle() {
    this.selectingPlanMode = true;
  }



  finishlSelecting(selectingPlanMode: boolean) {
    this.cancelSelectingPlanMode(selectingPlanMode);
    this.cancel();
  }

  cancelSelectingPlanMode(selectingPlanMode: boolean) {
    this.selectingPlanMode = selectingPlanMode;
  }

  cancel() {
    this.cancelSelecting.emit(false);
  }

}
