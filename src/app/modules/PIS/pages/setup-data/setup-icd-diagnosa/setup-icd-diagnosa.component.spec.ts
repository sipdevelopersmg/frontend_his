import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupIcdDiagnosaComponent } from './setup-icd-diagnosa.component';

describe('SetupIcdDiagnosaComponent', () => {
  let component: SetupIcdDiagnosaComponent;
  let fixture: ComponentFixture<SetupIcdDiagnosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupIcdDiagnosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupIcdDiagnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
