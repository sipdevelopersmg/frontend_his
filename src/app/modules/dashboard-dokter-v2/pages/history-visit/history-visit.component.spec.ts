import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryVisitComponent } from './history-visit.component';

describe('HistoryVisitComponent', () => {
  let component: HistoryVisitComponent;
  let fixture: ComponentFixture<HistoryVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
