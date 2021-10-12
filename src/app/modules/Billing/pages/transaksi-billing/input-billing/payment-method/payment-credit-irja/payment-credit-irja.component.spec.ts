import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCreditIrjaComponent } from './payment-credit-irja.component';

describe('PaymentCreditIrjaComponent', () => {
  let component: PaymentCreditIrjaComponent;
  let fixture: ComponentFixture<PaymentCreditIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCreditIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCreditIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
