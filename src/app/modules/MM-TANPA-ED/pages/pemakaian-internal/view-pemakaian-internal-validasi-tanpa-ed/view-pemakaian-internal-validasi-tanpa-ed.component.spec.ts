import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPemakaianInternalValidasiTanpaEdComponent } from './view-pemakaian-internal-validasi-tanpa-ed.component';

describe('ViewPemakaianInternalValidasiTanpaEdComponent', () => {
  let component: ViewPemakaianInternalValidasiTanpaEdComponent;
  let fixture: ComponentFixture<ViewPemakaianInternalValidasiTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPemakaianInternalValidasiTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPemakaianInternalValidasiTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
