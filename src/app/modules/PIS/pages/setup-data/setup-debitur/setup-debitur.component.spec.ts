import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDebiturComponent } from './setup-debitur.component';

describe('SetupDebiturComponent', () => {
  let component: SetupDebiturComponent;
  let fixture: ComponentFixture<SetupDebiturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupDebiturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDebiturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
