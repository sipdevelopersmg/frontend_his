import { TestBed } from '@angular/core/testing';

import { ManagementBedRawatInapService } from './management-bed-rawat-inap.service';

describe('ManagementBedRawatInapService', () => {
  let service: ManagementBedRawatInapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementBedRawatInapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
