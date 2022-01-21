import { TestBed } from '@angular/core/testing';

import { AuditStokOpnameService } from './audit-stok-opname.service';

describe('AuditStokOpnameService', () => {
  let service: AuditStokOpnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditStokOpnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
