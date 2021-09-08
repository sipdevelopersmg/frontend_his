import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPenerimaanComponent } from './view-penerimaan.component';

describe('ViewPenerimaanComponent', () => {
  let component: ViewPenerimaanComponent;
  let fixture: ComponentFixture<ViewPenerimaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPenerimaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPenerimaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
