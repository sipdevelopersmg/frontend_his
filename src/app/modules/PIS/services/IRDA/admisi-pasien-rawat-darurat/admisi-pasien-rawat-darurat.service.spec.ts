import { TestBed } from '@angular/core/testing';

import { AdmisiPasienRawatDaruratService } from './admisi-pasien-rawat-darurat.service';

describe('AdmisiPasienRawatDaruratService', () => {
  let service: AdmisiPasienRawatDaruratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmisiPasienRawatDaruratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
