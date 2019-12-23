import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SamplePlan } from 'src/app/_dtos/samplePlan';
import { PlaningService } from 'src/app/_services/planing.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PlanBuforService } from 'src/app/_services/plan-bufor.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent implements OnInit {
  @Output() cancelSelectingMode = new EventEmitter();
  @Input() currentGoal: string;
  model: any = {};
  samplePlans: SamplePlan[];
  constructor(private planingService: PlaningService, private auth: AuthService, private alertify: AlertifyService,
              private planBufor: PlanBuforService) { }

  ngOnInit() {
    this.planingService.getSamplePlans(this.currentGoal).subscribe((samplePlans: SamplePlan[]) => {
      this.samplePlans = samplePlans;
    });
  }

  cancel() {
    this.cancelSelectingMode.emit(false);
  }

  finishSelecting(samplePlanId: number) {
    this.model.goal = this.currentGoal;
    this.model.userId = this.auth.decodedToken.nameid;
    this.model.samplePlanId = samplePlanId;
    this.planingService.addElement('plans', this.model).subscribe(() => {
      this.alertify.success('Wybrano plan');
      this.planBufor.setCurrentDays(this.samplePlans.find(x => x.id === samplePlanId).days);
      this.cancel();
    }, error => {
      // this.alertify.error(error);
    });
  }

}
