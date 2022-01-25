import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReturTanpaEdComponent } from './view-retur-tanpa-ed.component';

describe('ViewReturTanpaEdComponent', () => {
  let component: ViewReturTanpaEdComponent;
  let fixture: ComponentFixture<ViewReturTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReturTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReturTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
