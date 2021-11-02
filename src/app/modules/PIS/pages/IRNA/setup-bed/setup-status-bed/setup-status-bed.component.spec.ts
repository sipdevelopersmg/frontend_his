import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupStatusBedComponent } from './setup-status-bed.component';

describe('SetupStatusBedComponent', () => {
  let component: SetupStatusBedComponent;
  let fixture: ComponentFixture<SetupStatusBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupStatusBedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupStatusBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
