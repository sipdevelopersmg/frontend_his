import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGridComponent } from './grid.component';

describe('SharedGridComponent', () => {
  let component: AppGridComponent;
  let fixture: ComponentFixture<AppGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
