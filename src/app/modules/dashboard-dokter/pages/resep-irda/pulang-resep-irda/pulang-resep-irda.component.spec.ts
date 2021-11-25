import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulangResepIrdaComponent } from './pulang-resep-irda.component';

describe('PulangResepIrdaComponent', () => {
  let component: PulangResepIrdaComponent;
  let fixture: ComponentFixture<PulangResepIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulangResepIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulangResepIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
