import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrjaDaftarComponent } from './refund-obat-irja-daftar.component';

describe('RefundObatIrjaDaftarComponent', () => {
  let component: RefundObatIrjaDaftarComponent;
  let fixture: ComponentFixture<RefundObatIrjaDaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrjaDaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrjaDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
