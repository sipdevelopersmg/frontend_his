import { TestBed } from '@angular/core/testing';

import { SetupBedRoomService } from './setup-bed-room.service';

describe('SetupBedRoomService', () => {
  let service: SetupBedRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupBedRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
