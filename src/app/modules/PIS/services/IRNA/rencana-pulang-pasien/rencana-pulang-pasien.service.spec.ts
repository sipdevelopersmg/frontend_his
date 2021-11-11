import { TestBed } from '@angular/core/testing';

import { RencanaPulangPasienService } from './rencana-pulang-pasien.service';

describe('RencanaPulangPasienService', () => {
  let service: RencanaPulangPasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RencanaPulangPasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
