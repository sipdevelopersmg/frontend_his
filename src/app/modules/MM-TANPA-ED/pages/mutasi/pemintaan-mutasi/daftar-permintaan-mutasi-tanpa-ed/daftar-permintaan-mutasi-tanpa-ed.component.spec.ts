import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPermintaanMutasiTanpaEdComponent } from './daftar-permintaan-mutasi-tanpa-ed.component';

describe('DaftarPermintaanMutasiTanpaEdComponent', () => {
  let component: DaftarPermintaanMutasiTanpaEdComponent;
  let fixture: ComponentFixture<DaftarPermintaanMutasiTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPermintaanMutasiTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPermintaanMutasiTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
