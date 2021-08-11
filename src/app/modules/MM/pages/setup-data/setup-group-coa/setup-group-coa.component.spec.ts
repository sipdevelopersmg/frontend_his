import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGroupCoaComponent } from './setup-group-coa.component';

describe('SetupGroupCoaComponent', () => {
  let component: SetupGroupCoaComponent;
  let fixture: ComponentFixture<SetupGroupCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupGroupCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGroupCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
