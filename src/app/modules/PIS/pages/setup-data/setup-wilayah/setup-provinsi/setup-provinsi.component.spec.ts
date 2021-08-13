import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProvinsiComponent } from './setup-provinsi.component';

describe('SetupProvinsiComponent', () => {
  let component: SetupProvinsiComponent;
  let fixture: ComponentFixture<SetupProvinsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupProvinsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProvinsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
