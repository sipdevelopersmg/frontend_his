import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySemuaPembayaranComponent } from './history-semua-pembayaran.component';

describe('HistorySemuaPembayaranComponent', () => {
  let component: HistorySemuaPembayaranComponent;
  let fixture: ComponentFixture<HistorySemuaPembayaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySemuaPembayaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySemuaPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
