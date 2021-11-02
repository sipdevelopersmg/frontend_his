import { TestBed } from '@angular/core/testing';

import { SuratPerintahMondokService } from './surat-perintah-mondok.service';

describe('SuratPerintahMondokService', () => {
  let service: SuratPerintahMondokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuratPerintahMondokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
