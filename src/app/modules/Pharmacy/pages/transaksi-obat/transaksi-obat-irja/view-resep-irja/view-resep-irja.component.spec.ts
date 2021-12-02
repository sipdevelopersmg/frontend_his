import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResepIrjaComponent } from './view-resep-irja.component';

describe('ViewResepIrjaComponent', () => {
  let component: ViewResepIrjaComponent;
  let fixture: ComponentFixture<ViewResepIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResepIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResepIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
