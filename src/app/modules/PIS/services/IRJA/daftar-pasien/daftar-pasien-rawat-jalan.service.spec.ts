import { TestBed } from '@angular/core/testing';

import { DaftarPasienRawatJalanService } from './daftar-pasien-rawat-jalan.service';

describe('DaftarPasienRawatJalanService', () => {
  let service: DaftarPasienRawatJalanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaftarPasienRawatJalanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
