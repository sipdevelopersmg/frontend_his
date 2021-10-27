import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSetoranKasirIrjaComponent } from './setup-setoran-kasir-irja.component';

describe('SetupSetoranKasirIrjaComponent', () => {
  let component: SetupSetoranKasirIrjaComponent;
  let fixture: ComponentFixture<SetupSetoranKasirIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupSetoranKasirIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSetoranKasirIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
