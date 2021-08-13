import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupStatusDokterComponent } from './setup-status-dokter.component';

describe('SetupStatusDokterComponent', () => {
  let component: SetupStatusDokterComponent;
  let fixture: ComponentFixture<SetupStatusDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupStatusDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupStatusDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
