import { TestBed } from '@angular/core/testing';

import { ResepFormulariumIrjaService } from './resep-formularium-irja.service';

describe('ResepFormulariumIrjaService', () => {
  let service: ResepFormulariumIrjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResepFormulariumIrjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
