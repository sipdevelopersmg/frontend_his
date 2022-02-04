import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuditStokOpnameComponent } from './input-audit-stok-opname.component';

describe('InputAuditStokOpnameComponent', () => {
  let component: InputAuditStokOpnameComponent;
  let fixture: ComponentFixture<InputAuditStokOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuditStokOpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuditStokOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
