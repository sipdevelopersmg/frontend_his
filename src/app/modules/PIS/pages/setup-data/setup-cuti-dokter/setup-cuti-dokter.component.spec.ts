import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCutiDokterComponent } from './setup-cuti-dokter.component';

describe('SetupCutiDokterComponent', () => {
  let component: SetupCutiDokterComponent;
  let fixture: ComponentFixture<SetupCutiDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupCutiDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCutiDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
