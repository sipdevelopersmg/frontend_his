import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupVoucherPaymentComponent } from './setup-voucher-payment.component';

describe('SetupVoucherPaymentComponent', () => {
  let component: SetupVoucherPaymentComponent;
  let fixture: ComponentFixture<SetupVoucherPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupVoucherPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupVoucherPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
