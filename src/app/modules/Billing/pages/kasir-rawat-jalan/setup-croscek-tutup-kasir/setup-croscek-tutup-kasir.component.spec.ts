import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCroscekTutupKasirComponent } from './setup-croscek-tutup-kasir.component';

describe('SetupCroscekTutupKasirComponent', () => {
  let component: SetupCroscekTutupKasirComponent;
  let fixture: ComponentFixture<SetupCroscekTutupKasirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupCroscekTutupKasirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCroscekTutupKasirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
