import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaahResepIrjaComponent } from './telaah-resep-irja.component';

describe('TelaahResepIrjaComponent', () => {
  let component: TelaahResepIrjaComponent;
  let fixture: ComponentFixture<TelaahResepIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaahResepIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaahResepIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
