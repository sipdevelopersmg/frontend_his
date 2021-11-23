import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBillingRawatInapComponent } from './input-billing-rawat-inap.component';

describe('InputBillingRawatInapComponent', () => {
  let component: InputBillingRawatInapComponent;
  let fixture: ComponentFixture<InputBillingRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBillingRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBillingRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
