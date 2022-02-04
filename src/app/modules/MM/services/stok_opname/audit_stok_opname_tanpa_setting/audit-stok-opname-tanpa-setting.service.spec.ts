import { TestBed } from '@angular/core/testing';

import { AuditStokOpnameTanpaSettingService } from './audit-stok-opname-tanpa-setting.service';

describe('AuditStokOpnameTanpaSettingService', () => {
  let service: AuditStokOpnameTanpaSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditStokOpnameTanpaSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
