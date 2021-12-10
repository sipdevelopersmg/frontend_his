import { TestBed } from '@angular/core/testing';

import { RefundObatIrdaService } from './refund-obat-irda.service';

describe('RefundObatIrdaService', () => {
  let service: RefundObatIrdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundObatIrdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
