import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBillingRawatDaruratComponent } from './input-billing-rawat-darurat.component';

describe('InputBillingRawatDaruratComponent', () => {
  let component: InputBillingRawatDaruratComponent;
  let fixture: ComponentFixture<InputBillingRawatDaruratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBillingRawatDaruratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBillingRawatDaruratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
