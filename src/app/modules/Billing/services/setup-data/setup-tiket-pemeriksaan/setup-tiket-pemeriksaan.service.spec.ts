import { TestBed } from '@angular/core/testing';

import { SetupTiketPemeriksaanService } from './setup-tiket-pemeriksaan.service';

describe('SetupTiketPemeriksaanService', () => {
  let service: SetupTiketPemeriksaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTiketPemeriksaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
