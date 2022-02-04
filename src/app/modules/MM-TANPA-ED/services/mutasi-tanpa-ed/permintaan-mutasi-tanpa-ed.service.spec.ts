import { TestBed } from '@angular/core/testing';

import { PermintaanMutasiTanpaEdService } from './permintaan-mutasi-tanpa-ed.service';

describe('PermintaanMutasiTanpaEdService', () => {
  let service: PermintaanMutasiTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermintaanMutasiTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
