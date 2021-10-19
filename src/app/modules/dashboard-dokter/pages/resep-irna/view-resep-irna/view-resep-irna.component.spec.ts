import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResepIrnaComponent } from './view-resep-irna.component';

describe('ViewResepIrnaComponent', () => {
  let component: ViewResepIrnaComponent;
  let fixture: ComponentFixture<ViewResepIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResepIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResepIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
