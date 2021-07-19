import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPasienComponent } from './daftar-pasien.component';

describe('DaftarPasienComponent', () => {
  let component: DaftarPasienComponent;
  let fixture: ComponentFixture<DaftarPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
