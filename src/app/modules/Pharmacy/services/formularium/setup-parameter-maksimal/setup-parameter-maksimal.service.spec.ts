import { TestBed } from '@angular/core/testing';

import { SetupParameterMaksimalService } from './setup-parameter-maksimal.service';

describe('SetupParameterMaksimalService', () => {
  let service: SetupParameterMaksimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupParameterMaksimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
