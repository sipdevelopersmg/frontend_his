import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReturPembelianComponent } from './view-retur-pembelian.component';

describe('ViewReturPembelianComponent', () => {
  let component: ViewReturPembelianComponent;
  let fixture: ComponentFixture<ViewReturPembelianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReturPembelianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReturPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
