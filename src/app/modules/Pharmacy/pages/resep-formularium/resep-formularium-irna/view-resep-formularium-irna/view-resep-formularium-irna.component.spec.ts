import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResepFormulariumIrnaComponent } from './view-resep-formularium-irna.component';

describe('ViewResepFormulariumIrnaComponent', () => {
  let component: ViewResepFormulariumIrnaComponent;
  let fixture: ComponentFixture<ViewResepFormulariumIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResepFormulariumIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResepFormulariumIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
