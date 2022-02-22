import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResepFormulariumIrjaComponent } from './view-resep-formularium-irja.component';

describe('ViewResepFormulariumIrjaComponent', () => {
  let component: ViewResepFormulariumIrjaComponent;
  let fixture: ComponentFixture<ViewResepFormulariumIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResepFormulariumIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResepFormulariumIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
