import { TestBed } from '@angular/core/testing';

import { DaftarPasienService } from './daftar-pasien.service';

describe('DaftarPasienService', () => {
  let service: DaftarPasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaftarPasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
