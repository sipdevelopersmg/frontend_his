import { TestBed } from '@angular/core/testing';

import { SetupMetodeRacikanService } from './setup-metode-racikan.service';

describe('SetupMetodeRacikanService', () => {
  let service: SetupMetodeRacikanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupMetodeRacikanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
