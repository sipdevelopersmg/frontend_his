import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalkanPermintaanMutasiComponent } from './batalkan-permintaan-mutasi.component';

describe('BatalkanPermintaanMutasiComponent', () => {
  let component: BatalkanPermintaanMutasiComponent;
  let fixture: ComponentFixture<BatalkanPermintaanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatalkanPermintaanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatalkanPermintaanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
