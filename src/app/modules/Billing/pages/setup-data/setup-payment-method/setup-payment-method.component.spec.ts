import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPaymentMethodComponent } from './setup-payment-method.component';

describe('SetupPaymentMethodComponent', () => {
  let component: SetupPaymentMethodComponent;
  let fixture: ComponentFixture<SetupPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
