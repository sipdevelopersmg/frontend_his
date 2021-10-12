import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryInvoiceIrjaComponent } from './history-invoice-irja.component';

describe('HistoryInvoiceIrjaComponent', () => {
  let component: HistoryInvoiceIrjaComponent;
  let fixture: ComponentFixture<HistoryInvoiceIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryInvoiceIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryInvoiceIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
