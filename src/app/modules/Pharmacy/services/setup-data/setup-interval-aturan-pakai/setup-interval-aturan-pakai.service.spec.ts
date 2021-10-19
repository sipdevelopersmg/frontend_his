import { TestBed } from '@angular/core/testing';

import { SetupIntervalAturanPakaiService } from './setup-interval-aturan-pakai.service';

describe('SetupIntervalAturanPakaiService', () => {
  let service: SetupIntervalAturanPakaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupIntervalAturanPakaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
