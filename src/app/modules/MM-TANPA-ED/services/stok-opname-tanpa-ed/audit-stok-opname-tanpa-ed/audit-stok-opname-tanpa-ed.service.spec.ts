import { TestBed } from '@angular/core/testing';

import { AuditStokOpnameTanpaEdService } from './audit-stok-opname-tanpa-ed.service';

describe('AuditStokOpnameTanpaEdService', () => {
  let service: AuditStokOpnameTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditStokOpnameTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
