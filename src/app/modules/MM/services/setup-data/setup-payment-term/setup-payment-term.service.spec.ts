import { TestBed } from '@angular/core/testing';

import { SetupPaymentTermService } from './setup-payment-term.service';

describe('SetupPaymentTermService', () => {
  let service: SetupPaymentTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPaymentTermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
