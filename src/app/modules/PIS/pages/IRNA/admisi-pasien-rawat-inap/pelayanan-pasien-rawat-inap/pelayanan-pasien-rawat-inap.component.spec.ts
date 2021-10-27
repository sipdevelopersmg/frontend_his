import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelayananPasienRawatInapComponent } from './pelayanan-pasien-rawat-inap.component';

describe('PelayananPasienRawatInapComponent', () => {
  let component: PelayananPasienRawatInapComponent;
  let fixture: ComponentFixture<PelayananPasienRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelayananPasienRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelayananPasienRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
