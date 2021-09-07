import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTarifPaketComponent } from './setup-tarif-paket.component';

describe('SetupTarifPaketComponent', () => {
  let component: SetupTarifPaketComponent;
  let fixture: ComponentFixture<SetupTarifPaketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTarifPaketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTarifPaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
