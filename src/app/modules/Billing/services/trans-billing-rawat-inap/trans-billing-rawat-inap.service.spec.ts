import { TestBed } from '@angular/core/testing';

import { TransBillingRawatInapService } from './trans-billing-rawat-inap.service';

describe('TransBillingRawatInapService', () => {
  let service: TransBillingRawatInapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransBillingRawatInapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
