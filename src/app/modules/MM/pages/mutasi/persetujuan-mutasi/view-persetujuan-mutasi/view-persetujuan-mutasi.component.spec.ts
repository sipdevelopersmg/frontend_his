import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersetujuanMutasiComponent } from './view-persetujuan-mutasi.component';

describe('ViewPersetujuanMutasiComponent', () => {
  let component: ViewPersetujuanMutasiComponent;
  let fixture: ComponentFixture<ViewPersetujuanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPersetujuanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersetujuanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
