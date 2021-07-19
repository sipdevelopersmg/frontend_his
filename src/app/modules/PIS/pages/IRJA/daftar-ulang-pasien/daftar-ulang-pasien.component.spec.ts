import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarUlangPasienComponent } from './daftar-ulang-pasien.component';

describe('DaftarUlangPasienComponent', () => {
  let component: DaftarUlangPasienComponent;
  let fixture: ComponentFixture<DaftarUlangPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarUlangPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarUlangPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
