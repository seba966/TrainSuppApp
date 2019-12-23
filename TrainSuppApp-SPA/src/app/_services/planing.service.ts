import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaningService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addElement(type: string, model: any) {
    return this.http.post(this.baseUrl + type + '/add', model);
  }

  dropPlan(userId: any) {
    return this.http.delete(this.baseUrl + 'plans/drop/' + userId);
  }

  getUsersPlan(userId: number) {
    return this.http.get(this.baseUrl + 'plans/user/' + userId);
  }

  getPlansDay(planId: number) {
    return this.http.get(this.baseUrl + 'days/plan/' + planId);
  }

  getPlansDays(planId: number) {
    return this.http.get(this.baseUrl + 'days/all/plan/' + planId);
  }

  getDaysExercises(dayId: number) {
    return this.http.get(this.baseUrl + 'exercises/all/day/' + dayId);
  }

  getSamplePlans(goal: string) {
    return this.http.get(this.baseUrl + 'sampleplans/goal/' + goal);
  }

  getSamplePlan(id: number) {
    return this.http.get(this.baseUrl + 'sampleplans/' + id);
  }
}
