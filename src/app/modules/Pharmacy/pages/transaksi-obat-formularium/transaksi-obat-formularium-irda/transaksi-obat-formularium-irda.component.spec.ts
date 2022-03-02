import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiObatFormulariumIrdaComponent } from './transaksi-obat-formularium-irda.component';

describe('TransaksiObatFormulariumIrdaComponent', () => {
  let component: TransaksiObatFormulariumIrdaComponent;
  let fixture: ComponentFixture<TransaksiObatFormulariumIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiObatFormulariumIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiObatFormulariumIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
