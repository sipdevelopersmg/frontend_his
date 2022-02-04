import { TestBed } from '@angular/core/testing';

import { SettingStokOpnameService } from './setting-stok-opname.service';

describe('SettingStokOpnameService', () => {
  let service: SettingStokOpnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingStokOpnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
