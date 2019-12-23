/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanBuforService } from './plan-bufor.service';

describe('Service: PlanBufor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanBuforService]
    });
  });

  it('should ...', inject([PlanBuforService], (service: PlanBuforService) => {
    expect(service).toBeTruthy();
  }));
});
