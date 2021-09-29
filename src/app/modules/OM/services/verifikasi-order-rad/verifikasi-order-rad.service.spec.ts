import { TestBed } from '@angular/core/testing';

import { VerifikasiOrderRadService } from './verifikasi-order-rad.service';

describe('VerifikasiOrderRadService', () => {
  let service: VerifikasiOrderRadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifikasiOrderRadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
