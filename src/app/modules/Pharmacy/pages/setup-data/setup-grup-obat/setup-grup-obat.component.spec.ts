import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGrupObatComponent } from './setup-grup-obat.component';

describe('SetupGrupObatComponent', () => {
  let component: SetupGrupObatComponent;
  let fixture: ComponentFixture<SetupGrupObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupGrupObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGrupObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
