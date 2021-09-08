import { TestBed } from '@angular/core/testing';

import { SetupAsalRujukanService } from './setup-asal-rujukan.service';

describe('SetupAsalRujukanService', () => {
  let service: SetupAsalRujukanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupAsalRujukanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
