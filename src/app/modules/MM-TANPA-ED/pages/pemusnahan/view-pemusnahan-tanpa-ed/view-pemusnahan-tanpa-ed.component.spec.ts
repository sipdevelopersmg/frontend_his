import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPemusnahanTanpaEdComponent } from './view-pemusnahan-tanpa-ed.component';

describe('ViewPemusnahanTanpaEdComponent', () => {
  let component: ViewPemusnahanTanpaEdComponent;
  let fixture: ComponentFixture<ViewPemusnahanTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPemusnahanTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPemusnahanTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
