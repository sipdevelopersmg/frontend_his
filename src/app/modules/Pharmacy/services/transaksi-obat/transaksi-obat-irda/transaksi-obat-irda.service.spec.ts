import { TestBed } from '@angular/core/testing';

import { TransaksiObatIrdaService } from './transaksi-obat-irda.service';

describe('TransaksiObatIrdaService', () => {
  let service: TransaksiObatIrdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaksiObatIrdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
