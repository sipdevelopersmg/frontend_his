import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPermintaanMutasiComponent } from './daftar-permintaan-mutasi.component';

describe('DaftarPermintaanMutasiComponent', () => {
  let component: DaftarPermintaanMutasiComponent;
  let fixture: ComponentFixture<DaftarPermintaanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPermintaanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPermintaanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
