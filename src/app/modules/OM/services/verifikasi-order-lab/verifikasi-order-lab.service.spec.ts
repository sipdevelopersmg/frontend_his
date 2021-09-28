import { TestBed } from '@angular/core/testing';

import { VerifikasiOrderLabService } from './verifikasi-order-lab.service';

describe('VerifikasiOrderLabService', () => {
  let service: VerifikasiOrderLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifikasiOrderLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
