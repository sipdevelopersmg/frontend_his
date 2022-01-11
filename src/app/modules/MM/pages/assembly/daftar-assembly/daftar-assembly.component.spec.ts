import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarAssemblyComponent } from './daftar-assembly.component';

describe('DaftarAssemblyComponent', () => {
  let component: DaftarAssemblyComponent;
  let fixture: ComponentFixture<DaftarAssemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarAssemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
