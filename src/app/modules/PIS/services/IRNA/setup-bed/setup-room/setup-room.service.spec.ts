import { TestBed } from '@angular/core/testing';

import { SetupRoomService } from './setup-room.service';

describe('SetupRoomService', () => {
  let service: SetupRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
