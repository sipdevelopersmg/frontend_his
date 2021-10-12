import { TestBed } from '@angular/core/testing';

import { SetupSatuanAturanPakaiService } from './setup-satuan-aturan-pakai.service';

describe('SetupSatuanAturanPakaiService', () => {
  let service: SetupSatuanAturanPakaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupSatuanAturanPakaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
