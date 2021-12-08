import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembatalanBillingIrnaComponent } from './pembatalan-billing-irna.component';

describe('PembatalanBillingIrnaComponent', () => {
  let component: PembatalanBillingIrnaComponent;
  let fixture: ComponentFixture<PembatalanBillingIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembatalanBillingIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembatalanBillingIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
