import { TestBed } from '@angular/core/testing';

import { SetupPerencanaanKategoriService } from './setup-perencanaan-kategori.service';

describe('SetupPerencanaanKategoriService', () => {
  let service: SetupPerencanaanKategoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPerencanaanKategoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
