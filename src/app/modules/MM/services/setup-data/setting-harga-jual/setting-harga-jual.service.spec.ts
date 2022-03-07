import { TestBed } from '@angular/core/testing';

import { SettingHargaJualService } from './setting-harga-jual.service';

describe('SettingHargaJualService', () => {
  let service: SettingHargaJualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingHargaJualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
