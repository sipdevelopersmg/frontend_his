import { TestBed } from '@angular/core/testing';

import { PemakaianInternalTanpaEdService } from './pemakaian-internal-tanpa-ed.service';

describe('PemakaianInternalTanpaEdService', () => {
  let service: PemakaianInternalTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemakaianInternalTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
