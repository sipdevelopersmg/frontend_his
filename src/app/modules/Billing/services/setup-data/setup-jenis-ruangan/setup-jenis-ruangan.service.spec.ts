import { TestBed } from '@angular/core/testing';

import { SetupJenisRuanganService } from './setup-jenis-ruangan.service';

describe('SetupJenisRuanganService', () => {
  let service: SetupJenisRuanganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupJenisRuanganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
