import { TestBed } from '@angular/core/testing';

import { DaftarPemesananTempatTidurService } from './daftar-pemesanan-tempat-tidur.service';

describe('DaftarPemesananTempatTidurService', () => {
  let service: DaftarPemesananTempatTidurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaftarPemesananTempatTidurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
