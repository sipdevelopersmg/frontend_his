import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSmfDokterComponent } from './setup-smf-dokter.component';

describe('SetupSmfDokterComponent', () => {
  let component: SetupSmfDokterComponent;
  let fixture: ComponentFixture<SetupSmfDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupSmfDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSmfDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
