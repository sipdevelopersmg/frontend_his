import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarReturTanpaEdComponent } from './daftar-retur-tanpa-ed.component';

describe('DaftarReturTanpaEdComponent', () => {
  let component: DaftarReturTanpaEdComponent;
  let fixture: ComponentFixture<DaftarReturTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarReturTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarReturTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
