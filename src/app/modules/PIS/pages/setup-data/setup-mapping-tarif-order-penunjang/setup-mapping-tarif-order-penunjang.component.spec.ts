import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMappingTarifOrderPenunjangComponent } from './setup-mapping-tarif-order-penunjang.component';

describe('SetupMappingTarifOrderPenunjangComponent', () => {
  let component: SetupMappingTarifOrderPenunjangComponent;
  let fixture: ComponentFixture<SetupMappingTarifOrderPenunjangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupMappingTarifOrderPenunjangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMappingTarifOrderPenunjangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
