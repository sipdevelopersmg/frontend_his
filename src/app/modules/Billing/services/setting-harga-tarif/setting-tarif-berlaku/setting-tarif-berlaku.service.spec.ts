import { TestBed } from '@angular/core/testing';

import { SettingTarifBerlakuService } from './setting-tarif-berlaku.service';

describe('SettingTarifBerlakuService', () => {
  let service: SettingTarifBerlakuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingTarifBerlakuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
