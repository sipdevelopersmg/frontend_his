import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPetugasComponent } from './setup-petugas.component';

describe('SetupPetugasComponent', () => {
  let component: SetupPetugasComponent;
  let fixture: ComponentFixture<SetupPetugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPetugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPetugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
