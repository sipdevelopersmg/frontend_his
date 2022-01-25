import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersetujuanMutasiTanpaEdComponent } from './view-persetujuan-mutasi-tanpa-ed.component';

describe('ViewPersetujuanMutasiTanpaEdComponent', () => {
  let component: ViewPersetujuanMutasiTanpaEdComponent;
  let fixture: ComponentFixture<ViewPersetujuanMutasiTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPersetujuanMutasiTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersetujuanMutasiTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
