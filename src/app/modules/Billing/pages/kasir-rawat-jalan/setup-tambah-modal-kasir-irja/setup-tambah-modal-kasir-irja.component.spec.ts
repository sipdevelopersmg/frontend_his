import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTambahModalKasirIrjaComponent } from './setup-tambah-modal-kasir-irja.component';

describe('SetupTambahModalKasirIrjaComponent', () => {
  let component: SetupTambahModalKasirIrjaComponent;
  let fixture: ComponentFixture<SetupTambahModalKasirIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTambahModalKasirIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTambahModalKasirIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
