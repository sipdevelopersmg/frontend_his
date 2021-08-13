import { TestBed } from '@angular/core/testing';

import { SetupJobTypeService } from './setup-job-type.service';

describe('SetupJobTypeService', () => {
  let service: SetupJobTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupJobTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
