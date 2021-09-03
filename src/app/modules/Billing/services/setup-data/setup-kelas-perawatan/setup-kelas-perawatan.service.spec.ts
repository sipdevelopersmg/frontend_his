import { TestBed } from '@angular/core/testing';

import { SetupKelasPerawatanService } from './setup-kelas-perawatan.service';

describe('SetupKelasPerawatanService', () => {
  let service: SetupKelasPerawatanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupKelasPerawatanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
