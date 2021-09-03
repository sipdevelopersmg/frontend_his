import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJenisRuanganComponent } from './setup-jenis-ruangan.component';

describe('SetupJenisRuanganComponent', () => {
  let component: SetupJenisRuanganComponent;
  let fixture: ComponentFixture<SetupJenisRuanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupJenisRuanganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupJenisRuanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
