import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiObatIrnaComponent } from './transaksi-obat-irna.component';

describe('TransaksiObatIrnaComponent', () => {
  let component: TransaksiObatIrnaComponent;
  let fixture: ComponentFixture<TransaksiObatIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiObatIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiObatIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
