import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisiPasienRawatDaruratComponent } from './admisi-pasien-rawat-darurat.component';

describe('AdmisiPasienRawatDaruratComponent', () => {
  let component: AdmisiPasienRawatDaruratComponent;
  let fixture: ComponentFixture<AdmisiPasienRawatDaruratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisiPasienRawatDaruratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisiPasienRawatDaruratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
