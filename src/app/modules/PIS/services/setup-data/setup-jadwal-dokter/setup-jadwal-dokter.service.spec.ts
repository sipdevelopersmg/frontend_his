import { TestBed } from '@angular/core/testing';

import { SetupJadwalDokterService } from './setup-jadwal-dokter.service';

describe('SetupJadwalDokterService', () => {
  let service: SetupJadwalDokterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupJadwalDokterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
