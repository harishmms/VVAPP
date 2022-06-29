/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LabbooknowService } from './labbooknow.service';

describe('Service: Labbooknow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabbooknowService]
    });
  });

  it('should ...', inject([LabbooknowService], (service: LabbooknowService) => {
    expect(service).toBeTruthy();
  }));
});
