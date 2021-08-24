import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTipeSupplierComponent } from './setup-tipe-supplier.component';

describe('SetupTipeSupplierComponent', () => {
  let component: SetupTipeSupplierComponent;
  let fixture: ComponentFixture<SetupTipeSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTipeSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTipeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
