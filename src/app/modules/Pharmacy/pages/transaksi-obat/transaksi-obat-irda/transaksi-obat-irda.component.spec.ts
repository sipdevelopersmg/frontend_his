import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiObatIrdaComponent } from './transaksi-obat-irda.component';

describe('TransaksiObatIrdaComponent', () => {
  let component: TransaksiObatIrdaComponent;
  let fixture: ComponentFixture<TransaksiObatIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiObatIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiObatIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
