import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBedComponent } from './setup-bed.component';

describe('SetupBedComponent', () => {
  let component: SetupBedComponent;
  let fixture: ComponentFixture<SetupBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
