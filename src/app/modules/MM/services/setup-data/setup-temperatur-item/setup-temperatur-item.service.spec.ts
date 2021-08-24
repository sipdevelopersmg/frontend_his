import { TestBed } from '@angular/core/testing';

import { SetupTemperaturItemService } from './setup-temperatur-item.service';

describe('SetupTemperaturItemService', () => {
  let service: SetupTemperaturItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTemperaturItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
