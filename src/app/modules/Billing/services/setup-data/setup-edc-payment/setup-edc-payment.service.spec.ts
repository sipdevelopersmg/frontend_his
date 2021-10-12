import { TestBed } from '@angular/core/testing';

import { SetupEdcPaymentService } from './setup-edc-payment.service';

describe('SetupEdcPaymentService', () => {
  let service: SetupEdcPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupEdcPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
