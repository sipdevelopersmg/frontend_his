import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPemesananComponent } from './daftar-pemesanan.component';

describe('DaftarPemesananComponent', () => {
  let component: DaftarPemesananComponent;
  let fixture: ComponentFixture<DaftarPemesananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPemesananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPemesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
