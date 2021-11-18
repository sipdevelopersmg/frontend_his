import { TestBed } from '@angular/core/testing';

import { PemasukanRawatDaruratService } from './pemasukan-rawat-darurat.service';

describe('PemasukanRawatDaruratService', () => {
  let service: PemasukanRawatDaruratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemasukanRawatDaruratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
