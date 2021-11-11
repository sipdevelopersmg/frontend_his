import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratPengantarPembayaranComponent } from './surat-pengantar-pembayaran.component';

describe('SuratPengantarPembayaranComponent', () => {
  let component: SuratPengantarPembayaranComponent;
  let fixture: ComponentFixture<SuratPengantarPembayaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratPengantarPembayaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratPengantarPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
