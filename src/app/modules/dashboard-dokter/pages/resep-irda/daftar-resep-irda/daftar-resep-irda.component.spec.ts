import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarResepIrdaComponent } from './daftar-resep-irda.component';

describe('DaftarResepIrdaComponent', () => {
  let component: DaftarResepIrdaComponent;
  let fixture: ComponentFixture<DaftarResepIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarResepIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarResepIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
