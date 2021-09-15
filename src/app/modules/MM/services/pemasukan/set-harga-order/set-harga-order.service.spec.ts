import { TestBed } from '@angular/core/testing';

import { SetHargaOrderService } from './set-harga-order.service';

describe('SetHargaOrderService', () => {
  let service: SetHargaOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetHargaOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
