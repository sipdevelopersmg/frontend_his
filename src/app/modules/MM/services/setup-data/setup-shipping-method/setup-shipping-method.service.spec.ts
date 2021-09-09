import { TestBed } from '@angular/core/testing';

import { SetupShippingMethodService } from './setup-shipping-method.service';

describe('SetupShippingMethodService', () => {
  let service: SetupShippingMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupShippingMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
