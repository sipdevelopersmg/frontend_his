import { TestBed } from '@angular/core/testing';

import { SetupPetugasService } from './setup-petugas.service';

describe('SetupPetugasService', () => {
  let service: SetupPetugasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPetugasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
