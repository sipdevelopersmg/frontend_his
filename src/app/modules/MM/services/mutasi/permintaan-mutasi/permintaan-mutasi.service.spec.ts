import { TestBed } from '@angular/core/testing';

import { PermintaanMutasiService } from './permintaan-mutasi.service';

describe('PermintaanMutasiService', () => {
  let service: PermintaanMutasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermintaanMutasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
