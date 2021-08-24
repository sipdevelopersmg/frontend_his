import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFormulariumComponent } from './setup-formularium.component';

describe('SetupFormulariumComponent', () => {
  let component: SetupFormulariumComponent;
  let fixture: ComponentFixture<SetupFormulariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupFormulariumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFormulariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
