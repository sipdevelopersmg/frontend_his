import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmBoardComponent } from './atm-board.component';

describe('AtmBoardComponent', () => {
  let component: AtmBoardComponent;
  let fixture: ComponentFixture<AtmBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
