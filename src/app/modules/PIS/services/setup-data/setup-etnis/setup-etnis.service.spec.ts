import { TestBed } from '@angular/core/testing';

import { SetupEtnisService } from './setup-etnis.service';

describe('SetupEtnisService', () => {
  let service: SetupEtnisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupEtnisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
