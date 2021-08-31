import { TestBed } from '@angular/core/testing';

import { SetupStockRoomService } from './setup-stock-room.service';

describe('SetupStockRoomService', () => {
  let service: SetupStockRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupStockRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
