import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrnaDetailComponent } from './refund-obat-irna-detail.component';

describe('RefundObatIrnaDetailComponent', () => {
  let component: RefundObatIrnaDetailComponent;
  let fixture: ComponentFixture<RefundObatIrnaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrnaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrnaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
