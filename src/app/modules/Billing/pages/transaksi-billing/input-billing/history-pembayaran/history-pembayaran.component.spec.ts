import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPembayaranComponent } from './history-pembayaran.component';

describe('HistoryPembayaranComponent', () => {
  let component: HistoryPembayaranComponent;
  let fixture: ComponentFixture<HistoryPembayaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPembayaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
