import { TestBed } from '@angular/core/testing';

import { BundlesServiceService } from './bundles-service.service';

describe('BundlesServiceService', () => {
  let service: BundlesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundlesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
