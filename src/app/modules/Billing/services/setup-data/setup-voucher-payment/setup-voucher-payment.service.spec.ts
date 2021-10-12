import { TestBed } from '@angular/core/testing';

import { SetupVoucherPaymentService } from './setup-voucher-payment.service';

describe('SetupVoucherPaymentService', () => {
  let service: SetupVoucherPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupVoucherPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
