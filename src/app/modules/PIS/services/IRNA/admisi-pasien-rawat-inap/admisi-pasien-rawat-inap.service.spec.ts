import { TestBed } from '@angular/core/testing';

import { AdmisiPasienRawatInapService } from './admisi-pasien-rawat-inap.service';

describe('AdmisiPasienRawatInapService', () => {
  let service: AdmisiPasienRawatInapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmisiPasienRawatInapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
