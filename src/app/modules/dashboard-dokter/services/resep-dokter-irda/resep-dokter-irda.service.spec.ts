import { TestBed } from '@angular/core/testing';

import { ResepDokterIrdaService } from './resep-dokter-irda.service';

describe('ResepDokterIrdaService', () => {
  let service: ResepDokterIrdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResepDokterIrdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
