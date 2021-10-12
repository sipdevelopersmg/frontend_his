import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBukaKasirIrjaComponent } from './setup-buka-kasir-irja.component';

describe('SetupBukaKasirIrjaComponent', () => {
  let component: SetupBukaKasirIrjaComponent;
  let fixture: ComponentFixture<SetupBukaKasirIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBukaKasirIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBukaKasirIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
