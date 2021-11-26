import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResepIrdaComponent } from './input-resep-irda.component';

describe('InputResepIrdaComponent', () => {
  let component: InputResepIrdaComponent;
  let fixture: ComponentFixture<InputResepIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputResepIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputResepIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
