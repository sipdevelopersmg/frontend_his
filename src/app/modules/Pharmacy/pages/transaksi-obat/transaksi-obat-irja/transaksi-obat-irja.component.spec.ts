import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiObatIrjaComponent } from './transaksi-obat-irja.component';

describe('TransaksiObatIrjaComponent', () => {
  let component: TransaksiObatIrjaComponent;
  let fixture: ComponentFixture<TransaksiObatIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiObatIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiObatIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
