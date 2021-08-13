import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupEducationComponent } from './setup-education.component';

describe('SetupEducationComponent', () => {
  let component: SetupEducationComponent;
  let fixture: ComponentFixture<SetupEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
