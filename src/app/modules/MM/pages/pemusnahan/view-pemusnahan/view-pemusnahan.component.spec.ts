import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPemusnahanComponent } from './view-pemusnahan.component';

describe('ViewPemusnahanComponent', () => {
  let component: ViewPemusnahanComponent;
  let fixture: ComponentFixture<ViewPemusnahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPemusnahanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPemusnahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
