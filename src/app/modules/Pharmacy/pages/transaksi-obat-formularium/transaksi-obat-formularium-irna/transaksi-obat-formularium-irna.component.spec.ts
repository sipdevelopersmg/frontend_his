import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiObatFormulariumIrnaComponent } from './transaksi-obat-formularium-irna.component';

describe('TransaksiObatFormulariumIrnaComponent', () => {
  let component: TransaksiObatFormulariumIrnaComponent;
  let fixture: ComponentFixture<TransaksiObatFormulariumIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiObatFormulariumIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiObatFormulariumIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
