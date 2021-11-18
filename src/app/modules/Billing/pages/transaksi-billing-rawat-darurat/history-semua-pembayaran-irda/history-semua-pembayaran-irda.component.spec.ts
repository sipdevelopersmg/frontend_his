import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySemuaPembayaranIrdaComponent } from './history-semua-pembayaran-irda.component';

describe('HistorySemuaPembayaranIrdaComponent', () => {
  let component: HistorySemuaPembayaranIrdaComponent;
  let fixture: ComponentFixture<HistorySemuaPembayaranIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySemuaPembayaranIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySemuaPembayaranIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
