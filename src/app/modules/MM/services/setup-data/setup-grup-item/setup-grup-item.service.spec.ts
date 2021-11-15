import { TestBed } from '@angular/core/testing';

import { SetupGrupItemService } from './setup-grup-item.service';

describe('SetupGrupItemService', () => {
  let service: SetupGrupItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupGrupItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
