import { TestBed } from '@angular/core/testing';

import { SetupTipeItemService } from './setup-tipe-item.service';

describe('SetupTipeItemService', () => {
  let service: SetupTipeItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTipeItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
