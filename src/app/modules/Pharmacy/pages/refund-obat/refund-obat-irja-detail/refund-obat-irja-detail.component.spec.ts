import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrjaDetailComponent } from './refund-obat-irja-detail.component';

describe('RefundObatIrjaDetailComponent', () => {
  let component: RefundObatIrjaDetailComponent;
  let fixture: ComponentFixture<RefundObatIrjaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrjaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrjaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
