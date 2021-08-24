import { TestBed } from '@angular/core/testing';

import { SetupCoaService } from './setup-coa.service';

describe('SetupCoaService', () => {
  let service: SetupCoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupCoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
