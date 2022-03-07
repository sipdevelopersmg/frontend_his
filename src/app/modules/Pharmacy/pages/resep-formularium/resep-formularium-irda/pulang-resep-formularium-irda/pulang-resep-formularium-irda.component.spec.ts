import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulangResepFormulariumIrdaComponent } from './pulang-resep-formularium-irda.component';

describe('PulangResepFormulariumIrdaComponent', () => {
  let component: PulangResepFormulariumIrdaComponent;
  let fixture: ComponentFixture<PulangResepFormulariumIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulangResepFormulariumIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulangResepFormulariumIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
