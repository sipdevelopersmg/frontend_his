import { TestBed } from '@angular/core/testing';

import { RefundObatIrjaService } from './refund-obat-irja.service';

describe('RefundObatIrjaService', () => {
  let service: RefundObatIrjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundObatIrjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
