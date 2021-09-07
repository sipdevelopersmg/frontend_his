import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPemesananComponent } from './view-pemesanan.component';

describe('ViewPemesananComponent', () => {
  let component: ViewPemesananComponent;
  let fixture: ComponentFixture<ViewPemesananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPemesananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPemesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
