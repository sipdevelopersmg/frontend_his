import { TestBed } from '@angular/core/testing';

import { SetupFormulariumService } from './setup-formularium.service';

describe('SetupFormulariumService', () => {
  let service: SetupFormulariumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupFormulariumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
