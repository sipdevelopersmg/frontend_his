import { TestBed } from '@angular/core/testing';

import { InputKontrakPengadaanService } from './input-kontrak-pengadaan.service';

describe('InputKontrakPengadaanService', () => {
  let service: InputKontrakPengadaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputKontrakPengadaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
