import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundObatIrdaDaftarComponent } from './refund-obat-irda-daftar.component';

describe('RefundObatIrdaDaftarComponent', () => {
  let component: RefundObatIrdaDaftarComponent;
  let fixture: ComponentFixture<RefundObatIrdaDaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundObatIrdaDaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundObatIrdaDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
