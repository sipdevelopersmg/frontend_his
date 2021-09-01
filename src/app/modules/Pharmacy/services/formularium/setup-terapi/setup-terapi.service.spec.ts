import { TestBed } from '@angular/core/testing';

import { SetupTerapiService } from './setup-terapi.service';

describe('SetupTerapiService', () => {
  let service: SetupTerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
