import { TestBed } from '@angular/core/testing';

import { PersetujuanMutasiTanpaEdService } from './persetujuan-mutasi-tanpa-ed.service';

describe('PersetujuanMutasiTanpaEdService', () => {
  let service: PersetujuanMutasiTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersetujuanMutasiTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
