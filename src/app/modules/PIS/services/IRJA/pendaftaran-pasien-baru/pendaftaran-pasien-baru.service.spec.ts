import { TestBed } from '@angular/core/testing';

import { PendaftaranPasienBaruService } from './pendaftaran-pasien-baru.service';

describe('PendaftaranPasienBaruService', () => {
  let service: PendaftaranPasienBaruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendaftaranPasienBaruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
