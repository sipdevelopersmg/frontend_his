import { TestBed } from '@angular/core/testing';

import { ResepDokterIrnaService } from './resep-dokter-irna.service';

describe('ResepDokterIrnaService', () => {
  let service: ResepDokterIrnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResepDokterIrnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
