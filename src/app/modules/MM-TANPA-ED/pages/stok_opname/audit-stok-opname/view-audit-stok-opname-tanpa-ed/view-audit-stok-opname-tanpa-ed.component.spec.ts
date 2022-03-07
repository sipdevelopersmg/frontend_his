import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuditStokOpnameTanpaEdComponent } from './view-audit-stok-opname-tanpa-ed.component';

describe('ViewAuditStokOpnameTanpaEdComponent', () => {
  let component: ViewAuditStokOpnameTanpaEdComponent;
  let fixture: ComponentFixture<ViewAuditStokOpnameTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuditStokOpnameTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuditStokOpnameTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
