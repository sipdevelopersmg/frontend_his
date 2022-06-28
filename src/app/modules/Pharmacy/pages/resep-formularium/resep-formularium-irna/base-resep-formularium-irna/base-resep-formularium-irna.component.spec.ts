import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResepFormulariumIrnaComponent } from './base-resep-formularium-irna.component';

describe('BaseResepFormulariumIrnaComponent', () => {
  let component: BaseResepFormulariumIrnaComponent;
  let fixture: ComponentFixture<BaseResepFormulariumIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseResepFormulariumIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseResepFormulariumIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
