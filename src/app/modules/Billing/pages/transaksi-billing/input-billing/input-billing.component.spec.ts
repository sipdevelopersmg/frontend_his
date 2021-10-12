import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBillingComponent } from './input-billing.component';

describe('InputBillingComponent', () => {
  let component: InputBillingComponent;
  let fixture: ComponentFixture<InputBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
