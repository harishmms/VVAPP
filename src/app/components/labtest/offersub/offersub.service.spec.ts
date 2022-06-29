/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffersubService } from './offersub.service';

describe('Service: Offersub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffersubService]
    });
  });

  it('should ...', inject([OffersubService], (service: OffersubService) => {
    expect(service).toBeTruthy();
  }));
});
