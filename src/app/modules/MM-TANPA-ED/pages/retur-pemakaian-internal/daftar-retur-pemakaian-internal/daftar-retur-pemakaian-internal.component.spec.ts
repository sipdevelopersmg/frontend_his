import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarReturPemakaianInternalComponent } from './daftar-retur-pemakaian-internal.component';

describe('DaftarReturPemakaianInternalComponent', () => {
  let component: DaftarReturPemakaianInternalComponent;
  let fixture: ComponentFixture<DaftarReturPemakaianInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarReturPemakaianInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarReturPemakaianInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
