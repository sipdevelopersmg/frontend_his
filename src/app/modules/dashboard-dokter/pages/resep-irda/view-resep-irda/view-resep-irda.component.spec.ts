import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResepIrdaComponent } from './view-resep-irda.component';

describe('ViewResepIrdaComponent', () => {
  let component: ViewResepIrdaComponent;
  let fixture: ComponentFixture<ViewResepIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResepIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResepIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
