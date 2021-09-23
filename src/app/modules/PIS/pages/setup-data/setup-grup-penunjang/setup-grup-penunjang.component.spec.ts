import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGrupPenunjangComponent } from './setup-grup-penunjang.component';

describe('SetupGrupPenunjangComponent', () => {
  let component: SetupGrupPenunjangComponent;
  let fixture: ComponentFixture<SetupGrupPenunjangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupGrupPenunjangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGrupPenunjangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
