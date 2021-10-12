import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBankPaymentComponent } from './setup-bank-payment.component';

describe('SetupBankPaymentComponent', () => {
  let component: SetupBankPaymentComponent;
  let fixture: ComponentFixture<SetupBankPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBankPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBankPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
