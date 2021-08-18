import { TestBed } from '@angular/core/testing';

import { SetupGroupCoaService } from './setup-group-coa.service';

describe('SetupGroupCoaService', () => {
  let service: SetupGroupCoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupGroupCoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
