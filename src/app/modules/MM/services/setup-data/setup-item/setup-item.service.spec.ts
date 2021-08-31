import { TestBed } from '@angular/core/testing';

import { SetupItemService } from './setup-item.service';

describe('SetupItemService', () => {
  let service: SetupItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
