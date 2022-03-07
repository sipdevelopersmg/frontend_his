import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPemakaianInternalTanpaEdComponent } from './daftar-pemakaian-internal-tanpa-ed.component';

describe('DaftarPemakaianInternalTanpaEdComponent', () => {
  let component: DaftarPemakaianInternalTanpaEdComponent;
  let fixture: ComponentFixture<DaftarPemakaianInternalTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPemakaianInternalTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPemakaianInternalTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
