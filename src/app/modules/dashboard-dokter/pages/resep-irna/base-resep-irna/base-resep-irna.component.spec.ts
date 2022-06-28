import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResepIrnaComponent } from './base-resep-irna.component';

describe('BaseResepIrnaComponent', () => {
  let component: BaseResepIrnaComponent;
  let fixture: ComponentFixture<BaseResepIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseResepIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseResepIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
