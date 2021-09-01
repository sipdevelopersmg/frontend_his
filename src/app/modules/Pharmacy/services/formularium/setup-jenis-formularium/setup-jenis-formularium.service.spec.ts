import { TestBed } from '@angular/core/testing';

import { SetupJenisFormulariumService } from './setup-jenis-formularium.service';

describe('SetupJenisFormulariumService', () => {
  let service: SetupJenisFormulariumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupJenisFormulariumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
