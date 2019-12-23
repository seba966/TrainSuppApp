/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangesDoneService } from './changes-done.service';

describe('Service: ChangesDone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangesDoneService]
    });
  });

  it('should ...', inject([ChangesDoneService], (service: ChangesDoneService) => {
    expect(service).toBeTruthy();
  }));
});
