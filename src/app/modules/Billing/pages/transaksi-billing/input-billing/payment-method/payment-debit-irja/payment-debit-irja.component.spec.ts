import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDebitIrjaComponent } from './payment-debit-irja.component';

describe('PaymentDebitIrjaComponent', () => {
  let component: PaymentDebitIrjaComponent;
  let fixture: ComponentFixture<PaymentDebitIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDebitIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDebitIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
