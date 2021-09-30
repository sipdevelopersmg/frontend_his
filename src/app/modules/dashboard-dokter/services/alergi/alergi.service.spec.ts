import { TestBed } from '@angular/core/testing';

import { AlergiService } from './alergi.service';

describe('AlergiService', () => {
  let service: AlergiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlergiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
