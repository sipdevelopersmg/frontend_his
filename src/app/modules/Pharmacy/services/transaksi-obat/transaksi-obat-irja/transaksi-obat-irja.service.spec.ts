import { TestBed } from '@angular/core/testing';

import { TransaksiObatIrjaService } from './transaksi-obat-irja.service';

describe('TransaksiObatIrjaService', () => {
  let service: TransaksiObatIrjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaksiObatIrjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
