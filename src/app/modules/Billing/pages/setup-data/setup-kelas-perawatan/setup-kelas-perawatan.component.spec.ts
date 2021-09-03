import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupKelasPerawatanComponent } from './setup-kelas-perawatan.component';

describe('SetupKelasPerawatanComponent', () => {
  let component: SetupKelasPerawatanComponent;
  let fixture: ComponentFixture<SetupKelasPerawatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupKelasPerawatanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupKelasPerawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
