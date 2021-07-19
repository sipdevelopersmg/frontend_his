import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisiPasienRawatJalanComponent } from './admisi-pasien-rawat-jalan.component';

describe('AdmisiPasienRawatJalanComponent', () => {
  let component: AdmisiPasienRawatJalanComponent;
  let fixture: ComponentFixture<AdmisiPasienRawatJalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisiPasienRawatJalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisiPasienRawatJalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
