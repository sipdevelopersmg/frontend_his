import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPersetujuanMutasiTanpaEdComponent } from './daftar-persetujuan-mutasi-tanpa-ed.component';

describe('DaftarPersetujuanMutasiTanpaEdComponent', () => {
  let component: DaftarPersetujuanMutasiTanpaEdComponent;
  let fixture: ComponentFixture<DaftarPersetujuanMutasiTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPersetujuanMutasiTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPersetujuanMutasiTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
