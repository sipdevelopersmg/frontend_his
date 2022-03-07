import { TestBed } from '@angular/core/testing';

import { SettingStokOpnameTanpaEdService } from './setting-stok-opname-tanpa-ed.service';

describe('SettingStokOpnameTanpaEdService', () => {
  let service: SettingStokOpnameTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingStokOpnameTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
