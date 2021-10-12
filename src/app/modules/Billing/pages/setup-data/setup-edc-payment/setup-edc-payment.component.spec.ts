import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupEdcPaymentComponent } from './setup-edc-payment.component';

describe('SetupEdcPaymentComponent', () => {
  let component: SetupEdcPaymentComponent;
  let fixture: ComponentFixture<SetupEdcPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupEdcPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupEdcPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
