import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisiPasienRawatInapComponent } from './admisi-pasien-rawat-inap.component';

describe('AdmisiPasienRawatInapComponent', () => {
  let component: AdmisiPasienRawatInapComponent;
  let fixture: ComponentFixture<AdmisiPasienRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisiPasienRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisiPasienRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
