import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrjaComponent } from './refund-obat-irja.component';

describe('RefundObatIrjaComponent', () => {
  let component: RefundObatIrjaComponent;
  let fixture: ComponentFixture<RefundObatIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
