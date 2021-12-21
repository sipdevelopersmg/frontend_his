import { TestBed } from '@angular/core/testing';

import { RefundObatIrnaService } from './refund-obat-irna.service';

describe('RefundObatIrnaService', () => {
  let service: RefundObatIrnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundObatIrnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
