import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPemakaianInternalValidasiTanpaEdComponent } from './daftar-pemakaian-internal-validasi-tanpa-ed.component';

describe('DaftarPemakaianInternalValidasiTanpaEdComponent', () => {
  let component: DaftarPemakaianInternalValidasiTanpaEdComponent;
  let fixture: ComponentFixture<DaftarPemakaianInternalValidasiTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPemakaianInternalValidasiTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPemakaianInternalValidasiTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
