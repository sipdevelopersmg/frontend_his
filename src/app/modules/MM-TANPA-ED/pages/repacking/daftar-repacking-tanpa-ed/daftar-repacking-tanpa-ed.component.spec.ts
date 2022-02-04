import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarRepackingTanpaEdComponent } from './daftar-repacking-tanpa-ed.component';

describe('DaftarRepackingTanpaEdComponent', () => {
  let component: DaftarRepackingTanpaEdComponent;
  let fixture: ComponentFixture<DaftarRepackingTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarRepackingTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarRepackingTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
