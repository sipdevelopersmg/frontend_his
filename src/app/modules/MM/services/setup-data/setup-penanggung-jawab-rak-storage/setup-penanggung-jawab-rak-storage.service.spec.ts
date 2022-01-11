import { TestBed } from '@angular/core/testing';

import { SetupPenanggungJawabRakStorageService } from './setup-penanggung-jawab-rak-storage.service';

describe('SetupPenanggungJawabRakStorageService', () => {
  let service: SetupPenanggungJawabRakStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPenanggungJawabRakStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
