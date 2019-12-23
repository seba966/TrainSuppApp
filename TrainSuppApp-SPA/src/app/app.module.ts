import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './_components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ValueComponent } from './value/value.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './_components/home/home.component';
import { RegisterComponent } from './_components/home/register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TrainingPlanComponent } from './_components/training-plan/training-plan.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ResultsComponent } from './_components/results/results.component';
import { AuthGuard } from './_guards/auth.guard';
import { CreatePlanComponent } from './_components/training-plan/create-plan/create-plan.component';
import { AddDayComponent } from './_components/training-plan/create-plan/add-day/add-day.component';
import { AddExerciseComponent } from './_components/training-plan/create-plan/add-day/add-exercise/add-exercise.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserService } from './_services/user.service';
import { PlaningService } from './_services/planing.service';
import { SelectTypeComponent } from './_components/training-plan/select-type/select-type.component';
import { SelectPlanComponent } from './_components/training-plan/select-type/select-plan/select-plan.component';
import { ParametersComponent } from './_components/parameters/parameters.component';
import { MDBBootstrapModule, ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { UpdateParametersComponent } from './_components/parameters/update-parameters/update-parameters.component';
import { DatePipe } from '@angular/common';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ValueComponent,
      HomeComponent,
      RegisterComponent,
      TrainingPlanComponent,
      ResultsComponent,
      CreatePlanComponent,
      AddDayComponent,
      AddExerciseComponent,
      SelectTypeComponent,
      SelectPlanComponent,
      ParametersComponent,
      UpdateParametersComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MDBBootstrapModule.forRoot(),
      WavesModule,
      ChartsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
        // , {
        // onSameUrlNavigation: 'reload'}),
      JwtModule.forRoot({
        config: {
          // tslint:disable-next-line: object-literal-shorthand
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })

   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      PlaningService,
      DatePipe
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
