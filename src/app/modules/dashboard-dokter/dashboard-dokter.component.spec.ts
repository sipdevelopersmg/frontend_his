import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDokterComponent } from './dashboard-dokter.component';

describe('DashboardDokterComponent', () => {
  let component: DashboardDokterComponent;
  let fixture: ComponentFixture<DashboardDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
