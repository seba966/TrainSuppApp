/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserBuforService } from './user-bufor.service';

describe('Service: UserBufor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBuforService]
    });
  });

  it('should ...', inject([UserBuforService], (service: UserBuforService) => {
    expect(service).toBeTruthy();
  }));
});
