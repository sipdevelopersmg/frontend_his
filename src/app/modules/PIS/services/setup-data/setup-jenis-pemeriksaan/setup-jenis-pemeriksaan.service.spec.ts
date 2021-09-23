import { TestBed } from '@angular/core/testing';

import { SetupJenisPemeriksaanService } from './setup-jenis-pemeriksaan.service';

describe('SetupJenisPemeriksaanService', () => {
  let service: SetupJenisPemeriksaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupJenisPemeriksaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
