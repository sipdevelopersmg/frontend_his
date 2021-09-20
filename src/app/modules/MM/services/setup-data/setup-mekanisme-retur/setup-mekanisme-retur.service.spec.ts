import { TestBed } from '@angular/core/testing';

import { SetupMekanismeReturService } from './setup-mekanisme-retur.service';

describe('SetupMekanismeReturService', () => {
  let service: SetupMekanismeReturService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupMekanismeReturService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
