import { TestBed } from '@angular/core/testing';

import { PemasukanRawatJalanService } from './pemasukan-rawat-jalan.service';

describe('PemasukanRawatJalanService', () => {
  let service: PemasukanRawatJalanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemasukanRawatJalanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
