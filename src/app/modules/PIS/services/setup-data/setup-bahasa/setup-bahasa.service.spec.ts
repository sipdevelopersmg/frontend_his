import { TestBed } from '@angular/core/testing';

import { SetupBahasaService } from './setup-bahasa.service';

describe('SetupBahasaService', () => {
  let service: SetupBahasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupBahasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
