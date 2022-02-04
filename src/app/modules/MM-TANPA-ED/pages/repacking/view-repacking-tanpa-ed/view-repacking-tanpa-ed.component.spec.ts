import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepackingTanpaEdComponent } from './view-repacking-tanpa-ed.component';

describe('ViewRepackingTanpaEdComponent', () => {
  let component: ViewRepackingTanpaEdComponent;
  let fixture: ComponentFixture<ViewRepackingTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRepackingTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepackingTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
