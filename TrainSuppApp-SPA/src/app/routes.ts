import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { TrainingPlanComponent } from './_components/training-plan/training-plan.component';
import { ResultsComponent } from './_components/results/results.component';
import { AuthGuard } from './_guards/auth.guard';
import { ParametersComponent } from './_components/parameters/parameters.component';

export const appRoutes: Routes = [
  {path: '', component : HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'training-plan', component : TrainingPlanComponent, canActivate: [AuthGuard]},
      {path: 'parameters', component : ParametersComponent},
      {path: 'results', component : ResultsComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
