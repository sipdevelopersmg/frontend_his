import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntrianPasienRawatJalanComponent } from './antrian-pasien-rawat-jalan.component';

describe('AntrianPasienRawatJalanComponent', () => {
  let component: AntrianPasienRawatJalanComponent;
  let fixture: ComponentFixture<AntrianPasienRawatJalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntrianPasienRawatJalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntrianPasienRawatJalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
