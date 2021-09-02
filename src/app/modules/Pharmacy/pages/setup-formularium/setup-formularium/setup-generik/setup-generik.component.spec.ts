import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGenerikComponent } from './setup-generik.component';

describe('SetupGenerikComponent', () => {
  let component: SetupGenerikComponent;
  let fixture: ComponentFixture<SetupGenerikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupGenerikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGenerikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
