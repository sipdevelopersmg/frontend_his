import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarReturPembelianComponent } from './daftar-retur-pembelian.component';

describe('DaftarReturPembelianComponent', () => {
  let component: DaftarReturPembelianComponent;
  let fixture: ComponentFixture<DaftarReturPembelianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarReturPembelianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarReturPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
