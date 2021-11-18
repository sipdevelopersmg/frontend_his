import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryInvoiceIrdaComponent } from './history-invoice-irda.component';

describe('HistoryInvoiceIrdaComponent', () => {
  let component: HistoryInvoiceIrdaComponent;
  let fixture: ComponentFixture<HistoryInvoiceIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryInvoiceIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryInvoiceIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
