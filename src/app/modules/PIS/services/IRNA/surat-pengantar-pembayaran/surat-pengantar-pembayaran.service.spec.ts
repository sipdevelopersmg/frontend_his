import { TestBed } from '@angular/core/testing';

import { SuratPengantarPembayaranService } from './surat-pengantar-pembayaran.service';

describe('SuratPengantarPembayaranService', () => {
  let service: SuratPengantarPembayaranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuratPengantarPembayaranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
