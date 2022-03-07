import { TestBed } from '@angular/core/testing';

import { AuditStokOpnameTanpaSettingTanpaEdService } from './audit-stok-opname-tanpa-setting-tanpa-ed.service';

describe('AuditStokOpnameTanpaSettingTanpaEdService', () => {
  let service: AuditStokOpnameTanpaSettingTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditStokOpnameTanpaSettingTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
