import { TestBed } from '@angular/core/testing';

import { AdmisiPasienRawatJalanService } from './admisi-pasien-rawat-jalan.service';

describe('AdmisiPasienRawatJalanService', () => {
  let service: AdmisiPasienRawatJalanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmisiPasienRawatJalanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
