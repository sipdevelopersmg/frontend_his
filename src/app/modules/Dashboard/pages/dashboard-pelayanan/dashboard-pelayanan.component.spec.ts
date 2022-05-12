import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPelayananComponent } from './dashboard-pelayanan.component';

describe('DashboardPelayananComponent', () => {
  let component: DashboardPelayananComponent;
  let fixture: ComponentFixture<DashboardPelayananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPelayananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPelayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
