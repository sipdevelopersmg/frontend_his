import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResepFormulariumIrdaComponent } from './input-resep-formularium-irda.component';

describe('InputResepFormulariumIrdaComponent', () => {
  let component: InputResepFormulariumIrdaComponent;
  let fixture: ComponentFixture<InputResepFormulariumIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputResepFormulariumIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputResepFormulariumIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
