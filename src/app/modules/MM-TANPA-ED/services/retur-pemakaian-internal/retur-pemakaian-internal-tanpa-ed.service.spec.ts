import { TestBed } from '@angular/core/testing';

import { ReturPemakaianInternalTanpaEdService } from './retur-pemakaian-internal-tanpa-ed.service';

describe('ReturPemakaianInternalTanpaEdService', () => {
  let service: ReturPemakaianInternalTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturPemakaianInternalTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
