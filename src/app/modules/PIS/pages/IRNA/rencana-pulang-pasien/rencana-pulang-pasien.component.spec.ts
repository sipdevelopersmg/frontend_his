import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RencanaPulangPasienComponent } from './rencana-pulang-pasien.component';

describe('RencanaPulangPasienComponent', () => {
  let component: RencanaPulangPasienComponent;
  let fixture: ComponentFixture<RencanaPulangPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RencanaPulangPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RencanaPulangPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
