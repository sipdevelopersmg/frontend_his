import { TestBed } from '@angular/core/testing';

import { SetupKecamatanService } from './setup-kecamatan.service';

describe('SetupKecamatanService', () => {
  let service: SetupKecamatanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupKecamatanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
