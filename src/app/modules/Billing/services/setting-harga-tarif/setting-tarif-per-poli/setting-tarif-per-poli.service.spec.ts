import { TestBed } from '@angular/core/testing';

import { SettingTarifPerPoliService } from './setting-tarif-per-poli.service';

describe('SettingTarifPerPoliService', () => {
  let service: SettingTarifPerPoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingTarifPerPoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
