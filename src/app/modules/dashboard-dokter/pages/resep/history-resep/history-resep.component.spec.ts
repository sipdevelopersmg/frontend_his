import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryResepComponent } from './history-resep.component';

describe('HistoryResepComponent', () => {
  let component: HistoryResepComponent;
  let fixture: ComponentFixture<HistoryResepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryResepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryResepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
