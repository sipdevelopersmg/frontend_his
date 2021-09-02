import { TestBed } from '@angular/core/testing';

import { SetupGenerikService } from './setup-generik.service';

describe('SetupGenerikService', () => {
  let service: SetupGenerikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupGenerikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
