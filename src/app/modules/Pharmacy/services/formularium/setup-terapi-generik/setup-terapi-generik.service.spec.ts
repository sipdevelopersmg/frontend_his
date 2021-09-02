import { TestBed } from '@angular/core/testing';

import { SetupTerapiGenerikService } from './setup-terapi-generik.service';

describe('SetupTerapiGenerikService', () => {
  let service: SetupTerapiGenerikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTerapiGenerikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
