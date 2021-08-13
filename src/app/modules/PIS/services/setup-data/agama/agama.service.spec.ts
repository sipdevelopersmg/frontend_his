import { TestBed } from '@angular/core/testing';

import { AgamaService } from './agama.service';

describe('AgamaService', () => {
  let service: AgamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
