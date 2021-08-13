import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupKecamatanComponent } from './setup-kecamatan.component';

describe('SetupKecamatanComponent', () => {
  let component: SetupKecamatanComponent;
  let fixture: ComponentFixture<SetupKecamatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupKecamatanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupKecamatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
