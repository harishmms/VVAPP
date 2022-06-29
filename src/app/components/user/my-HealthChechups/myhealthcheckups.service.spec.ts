/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyhealthcheckupsService } from './myhealthcheckups.service';

describe('Service: Myhealthcheckups', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyhealthcheckupsService]
    });
  });

  it('should ...', inject([MyhealthcheckupsService], (service: MyhealthcheckupsService) => {
    expect(service).toBeTruthy();
  }));
});
