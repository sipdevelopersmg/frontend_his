import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrnaDaftarComponent } from './refund-obat-irna-daftar.component';

describe('RefundObatIrnaDaftarComponent', () => {
  let component: RefundObatIrnaDaftarComponent;
  let fixture: ComponentFixture<RefundObatIrnaDaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrnaDaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrnaDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
