import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrdaComponent } from './refund-obat-irda.component';

describe('RefundObatIrdaComponent', () => {
  let component: RefundObatIrdaComponent;
  let fixture: ComponentFixture<RefundObatIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
