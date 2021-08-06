import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiwayatPemeriksaanComponent } from './riwayat-pemeriksaan.component';

describe('RiwayatPemeriksaanComponent', () => {
  let component: RiwayatPemeriksaanComponent;
  let fixture: ComponentFixture<RiwayatPemeriksaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiwayatPemeriksaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiwayatPemeriksaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
