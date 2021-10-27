import { TestBed } from '@angular/core/testing';

import { TransaksiObatIrnaService } from './transaksi-obat-irna.service';

describe('TransaksiObatIrnaService', () => {
  let service: TransaksiObatIrnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaksiObatIrnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
