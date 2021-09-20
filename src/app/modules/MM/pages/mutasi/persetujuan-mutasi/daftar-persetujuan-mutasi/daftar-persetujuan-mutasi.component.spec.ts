import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPersetujuanMutasiComponent } from './daftar-persetujuan-mutasi.component';

describe('DaftarPersetujuanMutasiComponent', () => {
  let component: DaftarPersetujuanMutasiComponent;
  let fixture: ComponentFixture<DaftarPersetujuanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPersetujuanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPersetujuanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
