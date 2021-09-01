import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGrupTarifComponent } from './setup-grup-tarif.component';

describe('SetupGrupTarifComponent', () => {
  let component: SetupGrupTarifComponent;
  let fixture: ComponentFixture<SetupGrupTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupGrupTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGrupTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
