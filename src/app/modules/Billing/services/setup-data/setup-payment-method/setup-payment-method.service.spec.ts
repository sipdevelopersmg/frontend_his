import { TestBed } from '@angular/core/testing';

import { SetupPaymentMethodService } from './setup-payment-method.service';

describe('SetupPaymentMethodService', () => {
  let service: SetupPaymentMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPaymentMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
