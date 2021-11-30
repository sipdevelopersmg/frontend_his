import { TestBed } from '@angular/core/testing';

import { SetupPeresepanMaksimalService } from './setup-peresepan-maksimal.service';

describe('SetupPeresepanMaksimalService', () => {
  let service: SetupPeresepanMaksimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPeresepanMaksimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
