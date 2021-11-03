import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariPasienAntrianTppriComponent } from './cari-pasien-antrian-tppri.component';

describe('CariPasienAntrianTppriComponent', () => {
  let component: CariPasienAntrianTppriComponent;
  let fixture: ComponentFixture<CariPasienAntrianTppriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariPasienAntrianTppriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariPasienAntrianTppriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
