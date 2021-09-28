import { TestBed } from '@angular/core/testing';

import { RadiologiService } from './radiologi.service';

describe('RadiologiService', () => {
  let service: RadiologiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiologiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
