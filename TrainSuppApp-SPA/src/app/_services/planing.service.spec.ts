/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlaningService } from './planing.service';

describe('Service: Planing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaningService]
    });
  });

  it('should ...', inject([PlaningService], (service: PlaningService) => {
    expect(service).toBeTruthy();
  }));
});
