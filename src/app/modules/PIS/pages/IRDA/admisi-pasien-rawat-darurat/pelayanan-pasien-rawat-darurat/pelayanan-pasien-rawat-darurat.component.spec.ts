import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelayananPasienRawatDaruratComponent } from './pelayanan-pasien-rawat-darurat.component';

describe('PelayananPasienRawatDaruratComponent', () => {
  let component: PelayananPasienRawatDaruratComponent;
  let fixture: ComponentFixture<PelayananPasienRawatDaruratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelayananPasienRawatDaruratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelayananPasienRawatDaruratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
