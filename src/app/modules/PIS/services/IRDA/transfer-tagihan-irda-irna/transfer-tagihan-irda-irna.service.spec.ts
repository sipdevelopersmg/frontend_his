import { TestBed } from '@angular/core/testing';

import { TransferTagihanIrdaIrnaService } from './transfer-tagihan-irda-irna.service';

describe('TransferTagihanIrdaIrnaService', () => {
  let service: TransferTagihanIrdaIrnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferTagihanIrdaIrnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
