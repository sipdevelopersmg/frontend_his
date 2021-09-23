import { TestBed } from '@angular/core/testing';

import { SetupTambahanAturanPakaiService } from './setup-tambahan-aturan-pakai.service';

describe('SetupTambahanAturanPakaiService', () => {
  let service: SetupTambahanAturanPakaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTambahanAturanPakaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
