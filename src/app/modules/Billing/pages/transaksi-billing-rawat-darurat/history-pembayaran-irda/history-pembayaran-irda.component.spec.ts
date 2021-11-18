import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPembayaranIrdaComponent } from './history-pembayaran-irda.component';

describe('HistoryPembayaranIrdaComponent', () => {
  let component: HistoryPembayaranIrdaComponent;
  let fixture: ComponentFixture<HistoryPembayaranIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPembayaranIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPembayaranIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
