import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepackingComponent } from './view-repacking.component';

describe('ViewRepackingComponent', () => {
  let component: ViewRepackingComponent;
  let fixture: ComponentFixture<ViewRepackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRepackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
