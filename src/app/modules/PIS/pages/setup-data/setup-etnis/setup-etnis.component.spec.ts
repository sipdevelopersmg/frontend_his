import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupEtnisComponent } from './setup-etnis.component';

describe('SetupEtnisComponent', () => {
  let component: SetupEtnisComponent;
  let fixture: ComponentFixture<SetupEtnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupEtnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupEtnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
