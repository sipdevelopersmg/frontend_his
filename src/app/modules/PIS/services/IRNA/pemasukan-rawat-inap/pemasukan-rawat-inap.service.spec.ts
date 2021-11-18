import { TestBed } from '@angular/core/testing';

import { PemasukanRawatInapService } from './pemasukan-rawat-inap.service';

describe('PemasukanRawatInapService', () => {
  let service: PemasukanRawatInapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemasukanRawatInapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
