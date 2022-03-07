import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiObatFormulariumIrjaComponent } from './transaksi-obat-formularium-irja.component';

describe('TransaksiObatFormulariumIrjaComponent', () => {
  let component: TransaksiObatFormulariumIrjaComponent;
  let fixture: ComponentFixture<TransaksiObatFormulariumIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiObatFormulariumIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiObatFormulariumIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
