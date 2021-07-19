import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupKodeTarifComponent } from './setup-kode-tarif.component';

describe('SetupKodeTarifComponent', () => {
  let component: SetupKodeTarifComponent;
  let fixture: ComponentFixture<SetupKodeTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupKodeTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupKodeTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
