import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PlaningService } from 'src/app/_services/planing.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { PlanBuforService } from 'src/app/_services/plan-bufor.service';
import { ChangesDoneService } from 'src/app/_services/changes-done.service';
import { Day } from 'src/app/_dtos/day';
import { Exercise } from 'src/app/_dtos/exercise';
import { Plan } from 'src/app/_dtos/plan';
import { SamplePlan } from 'src/app/_dtos/samplePlan';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.component.html',
  styleUrls: ['./training-plan.component.css']
})
export class TrainingPlanComponent {
  currentPlanId: number;
  currentUserId: number;
  currentSamplePlanId = 0;

  creatingMode = false;
  selectingMode = false;
  isChecked = false;

  plan: Plan;
  days: Day[];
  exercises: Exercise[];
  // samplePlan: SamplePlan;

  constructor(private planingService: PlaningService, private alertify: AlertifyService,
              private authService: AuthService, private planBufor: PlanBuforService) {
                this.currentUserId = this.authService.decodedToken.nameid;
                this.planBufor.getCurrentPlanId().subscribe(planId => this.currentPlanId = planId);
                this.planBufor.getCurrentDays().subscribe((days: Day[]) => {
                  this.days = days;
                }, error => {
                  this.alertify.error(error);
                });

                this.planingService.getUsersPlan(this.currentUserId).subscribe((plan: Plan) => {
                  this.plan = plan;
                  this.currentPlanId = plan.id;
                  this.currentSamplePlanId = plan.samplePlanId;
                  // this.isChecked = true;
                  this.planingService.getPlansDays(this.plan.id).subscribe((days: Day[]) => {
                    this.days = days;
                    if (this.currentSamplePlanId > 0) {
                      this.planingService.getSamplePlan(this.currentSamplePlanId).subscribe((samplePlan: SamplePlan) => {
                        this.days = samplePlan.days;
                      });
                    }

                  }, error => {
                    // this.alertify.error(error);
                  });
                }, error => {
                  // this.alertify.error(error);
                  this.isChecked = true;
                });

              }

  // ngOnInit() { }

  creatingToggle() {
    this.creatingMode = true;
    if (this.currentPlanId !== 7777777 && this.days.length === 0) {
      this.dropPlan();
    }
  }

  cancelCreatingMode(creatingMode: boolean) {
    this.creatingMode = creatingMode;
  }

  selectingToggle() {
    this.selectingMode = true;
  }

  cancelSelectingMode(selectingMode: boolean) {
    this.selectingMode = selectingMode;
  }
    ////////////////////////////////////////////
   ////////// Metody dla planu  ///////////////
  ////////////////////////////////////////////
  dropPlan() {
    this.planingService.dropPlan(this.authService.decodedToken.nameid).subscribe(() => {
      this.alertify.warning('Anulowano plan');
    }, error => {
      // this.alertify.error(error);
    });
    // this.alertify.error('Usunięto plan');
    this.isChecked = true;
    this.planBufor.clearCurrentDays();
    this.planBufor.setCurrentPlanId(0);
  }

}
