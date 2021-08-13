import { TestBed } from '@angular/core/testing';

import { SetupProvinsiService } from './setup-provinsi.service';

describe('SetupProvinsiService', () => {
  let service: SetupProvinsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupProvinsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
