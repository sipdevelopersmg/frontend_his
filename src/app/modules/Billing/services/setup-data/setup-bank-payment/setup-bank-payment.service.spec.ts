import { TestBed } from '@angular/core/testing';

import { SetupBankPaymentService } from './setup-bank-payment.service';

describe('SetupBankPaymentService', () => {
  let service: SetupBankPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupBankPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
