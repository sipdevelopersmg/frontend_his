import { TestBed } from '@angular/core/testing';

import { SetupEducationService } from './setup-education.service';

describe('SetupEducationService', () => {
  let service: SetupEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
