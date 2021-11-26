import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrnaComponent } from './refund-obat-irna.component';

describe('RefundObatIrnaComponent', () => {
  let component: RefundObatIrnaComponent;
  let fixture: ComponentFixture<RefundObatIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
