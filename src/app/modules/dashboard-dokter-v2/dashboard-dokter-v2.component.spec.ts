import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDokterV2Component } from './dashboard-dokter-v2.component';

describe('DashboardDokterV2Component', () => {
  let component: DashboardDokterV2Component;
  let fixture: ComponentFixture<DashboardDokterV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDokterV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDokterV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
