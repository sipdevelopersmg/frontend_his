import { TestBed } from '@angular/core/testing';

import { ResepFormulariumIrdaService } from './resep-formularium-irda.service';

describe('ResepFormulariumIrdaService', () => {
  let service: ResepFormulariumIrdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResepFormulariumIrdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
