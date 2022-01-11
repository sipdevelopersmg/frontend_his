import { TestBed } from '@angular/core/testing';

import { SetupRakStorageService } from './setup-rak-storage.service';

describe('SetupRakStorageService', () => {
  let service: SetupRakStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupRakStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
