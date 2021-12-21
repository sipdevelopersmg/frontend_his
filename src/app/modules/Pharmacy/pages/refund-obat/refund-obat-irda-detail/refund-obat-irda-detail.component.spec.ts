import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrdaDetailComponent } from './refund-obat-irda-detail.component';

describe('RefundObatIrdaDetailComponent', () => {
  let component: RefundObatIrdaDetailComponent;
  let fixture: ComponentFixture<RefundObatIrdaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrdaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrdaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
