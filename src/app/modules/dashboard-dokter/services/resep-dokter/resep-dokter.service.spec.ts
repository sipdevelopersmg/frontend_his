import { TestBed } from '@angular/core/testing';

import { ResepDokterService } from './resep-dokter.service';

describe('ResepDokterService', () => {
  let service: ResepDokterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResepDokterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
