import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarRepackingComponent } from './daftar-repacking.component';

describe('DaftarRepackingComponent', () => {
  let component: DaftarRepackingComponent;
  let fixture: ComponentFixture<DaftarRepackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarRepackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarRepackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
