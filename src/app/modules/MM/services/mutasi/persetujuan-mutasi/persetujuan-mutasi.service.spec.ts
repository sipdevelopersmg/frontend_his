import { TestBed } from '@angular/core/testing';

import { PersetujuanMutasiService } from './persetujuan-mutasi.service';

describe('PersetujuanMutasiService', () => {
  let service: PersetujuanMutasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersetujuanMutasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
