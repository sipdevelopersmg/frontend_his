import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResepFormulariumIrdaComponent } from './view-resep-formularium-irda.component';

describe('ViewResepFormulariumIrdaComponent', () => {
  let component: ViewResepFormulariumIrdaComponent;
  let fixture: ComponentFixture<ViewResepFormulariumIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResepFormulariumIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResepFormulariumIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
