import { TestBed } from '@angular/core/testing';

import { TransBillingRawatDaruratService } from './trans-billing-rawat-darurat.service';

describe('TransBillingRawatDaruratService', () => {
  let service: TransBillingRawatDaruratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransBillingRawatDaruratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
