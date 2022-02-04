import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPemusnahanTanpaEdComponent } from './daftar-pemusnahan-tanpa-ed.component';

describe('DaftarPemusnahanTanpaEdComponent', () => {
  let component: DaftarPemusnahanTanpaEdComponent;
  let fixture: ComponentFixture<DaftarPemusnahanTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPemusnahanTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPemusnahanTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
