import { TestBed } from '@angular/core/testing';

import { PendaftaranUlangPasienService } from './pendaftaran-ulang-pasien.service';

describe('PendaftaranUlangPasienService', () => {
  let service: PendaftaranUlangPasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendaftaranUlangPasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
