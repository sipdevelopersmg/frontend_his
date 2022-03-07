import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuditStokOpnameTanpaEdComponent } from './input-audit-stok-opname-tanpa-ed.component';

describe('InputAuditStokOpnameTanpaEdComponent', () => {
  let component: InputAuditStokOpnameTanpaEdComponent;
  let fixture: ComponentFixture<InputAuditStokOpnameTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuditStokOpnameTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuditStokOpnameTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
