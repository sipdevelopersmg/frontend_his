import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTutupKasirComponent } from './setup-tutup-kasir.component';

describe('SetupTutupKasirComponent', () => {
  let component: SetupTutupKasirComponent;
  let fixture: ComponentFixture<SetupTutupKasirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTutupKasirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTutupKasirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
