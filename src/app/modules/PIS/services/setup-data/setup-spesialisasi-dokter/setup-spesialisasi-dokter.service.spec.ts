import { TestBed } from '@angular/core/testing';

import { SetupSpesialisasiDokterService } from './setup-spesialisasi-dokter.service';

describe('SetupSpesialisasiDokterService', () => {
  let service: SetupSpesialisasiDokterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupSpesialisasiDokterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
