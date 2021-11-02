import { TestBed } from '@angular/core/testing';

import { SetupRoomCategoryService } from './setup-room-category.service';

describe('SetupRoomCategoryService', () => {
  let service: SetupRoomCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupRoomCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
