import { TestBed } from '@angular/core/testing';

import { SetupIcdDiagnosaService } from './setup-icd-diagnosa.service';

describe('SetupIcdDiagnosaService', () => {
  let service: SetupIcdDiagnosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupIcdDiagnosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
