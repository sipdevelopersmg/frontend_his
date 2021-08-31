import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupOutletComponent } from './setup-outlet.component';

describe('SetupOutletComponent', () => {
  let component: SetupOutletComponent;
  let fixture: ComponentFixture<SetupOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
