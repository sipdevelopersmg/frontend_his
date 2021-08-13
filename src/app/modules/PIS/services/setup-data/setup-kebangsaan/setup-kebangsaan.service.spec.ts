import { TestBed } from '@angular/core/testing';

import { SetupKebangsaanService } from './setup-kebangsaan.service';

describe('SetupKebangsaanService', () => {
  let service: SetupKebangsaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupKebangsaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
