import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCoaComponent } from './setup-coa.component';

describe('SetupCoaComponent', () => {
  let component: SetupCoaComponent;
  let fixture: ComponentFixture<SetupCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
