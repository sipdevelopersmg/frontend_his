import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPasienPerDokterComponent } from './daftar-pasien-per-dokter.component';

describe('DaftarPasienPerDokterComponent', () => {
  let component: DaftarPasienPerDokterComponent;
  let fixture: ComponentFixture<DaftarPasienPerDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPasienPerDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPasienPerDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
