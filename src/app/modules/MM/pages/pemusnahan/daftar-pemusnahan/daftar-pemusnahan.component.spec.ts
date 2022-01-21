import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPemusnahanComponent } from './daftar-pemusnahan.component';

describe('DaftarPemusnahanComponent', () => {
  let component: DaftarPemusnahanComponent;
  let fixture: ComponentFixture<DaftarPemusnahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPemusnahanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPemusnahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
