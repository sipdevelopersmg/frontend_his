import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelayananPasienRawatJalanComponent } from './pelayanan-pasien-rawat-jalan.component';

describe('PelayananPasienRawatJalanComponent', () => {
  let component: PelayananPasienRawatJalanComponent;
  let fixture: ComponentFixture<PelayananPasienRawatJalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelayananPasienRawatJalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelayananPasienRawatJalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
