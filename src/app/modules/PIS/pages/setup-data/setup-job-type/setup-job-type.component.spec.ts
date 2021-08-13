import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJobTypeComponent } from './setup-job-type.component';

describe('SetupJobTypeComponent', () => {
  let component: SetupJobTypeComponent;
  let fixture: ComponentFixture<SetupJobTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupJobTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupJobTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
