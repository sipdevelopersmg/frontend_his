import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarAssemblyTanpaEdComponent } from './daftar-assembly-tanpa-ed.component';

describe('DaftarAssemblyTanpaEdComponent', () => {
  let component: DaftarAssemblyTanpaEdComponent;
  let fixture: ComponentFixture<DaftarAssemblyTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarAssemblyTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarAssemblyTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
