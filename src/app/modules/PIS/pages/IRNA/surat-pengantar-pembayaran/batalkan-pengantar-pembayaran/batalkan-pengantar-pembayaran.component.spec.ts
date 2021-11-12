import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalkanPengantarPembayaranComponent } from './batalkan-pengantar-pembayaran.component';

describe('BatalkanPengantarPembayaranComponent', () => {
  let component: BatalkanPengantarPembayaranComponent;
  let fixture: ComponentFixture<BatalkanPengantarPembayaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatalkanPengantarPembayaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatalkanPengantarPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
