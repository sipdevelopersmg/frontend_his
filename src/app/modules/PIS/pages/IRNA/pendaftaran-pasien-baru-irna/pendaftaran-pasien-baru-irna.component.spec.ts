import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranPasienBaruIrnaComponent } from './pendaftaran-pasien-baru-irna.component';

describe('PendaftaranPasienBaruIrnaComponent', () => {
  let component: PendaftaranPasienBaruIrnaComponent;
  let fixture: ComponentFixture<PendaftaranPasienBaruIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendaftaranPasienBaruIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranPasienBaruIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
