import { TestBed } from '@angular/core/testing';

import { SetupDebiturService } from './setup-debitur.service';

describe('SetupDebiturService', () => {
  let service: SetupDebiturService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupDebiturService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
