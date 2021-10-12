import { TestBed } from '@angular/core/testing';

import { TransBillingService } from './trans-billing.service';

describe('TransBillingService', () => {
  let service: TransBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
