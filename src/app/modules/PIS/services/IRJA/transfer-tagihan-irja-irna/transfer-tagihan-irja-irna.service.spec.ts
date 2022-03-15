import { TestBed } from '@angular/core/testing';

import { TransferTagihanIrjaIrnaService } from './transfer-tagihan-irja-irna.service';

describe('TransferTagihanIrjaIrnaService', () => {
  let service: TransferTagihanIrjaIrnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferTagihanIrjaIrnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
