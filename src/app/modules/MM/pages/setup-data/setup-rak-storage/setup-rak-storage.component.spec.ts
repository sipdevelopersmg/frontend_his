import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupRakStorageComponent } from './setup-rak-storage.component';

describe('SetupRakStorageComponent', () => {
  let component: SetupRakStorageComponent;
  let fixture: ComponentFixture<SetupRakStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupRakStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupRakStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
