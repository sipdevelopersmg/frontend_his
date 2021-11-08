import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalkanMutasiComponent } from './batalkan-mutasi.component';

describe('BatalkanMutasiComponent', () => {
  let component: BatalkanMutasiComponent;
  let fixture: ComponentFixture<BatalkanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatalkanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatalkanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
