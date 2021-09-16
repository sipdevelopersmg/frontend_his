import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJadwalDokterComponent } from './setup-jadwal-dokter.component';

describe('SetupJadwalDokterComponent', () => {
  let component: SetupJadwalDokterComponent;
  let fixture: ComponentFixture<SetupJadwalDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupJadwalDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupJadwalDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
