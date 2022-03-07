import { TestBed } from '@angular/core/testing';

import { ResepFormulariumIrnaService } from './resep-formularium-irna.service';

describe('ResepFormulariumIrnaService', () => {
  let service: ResepFormulariumIrnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResepFormulariumIrnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
