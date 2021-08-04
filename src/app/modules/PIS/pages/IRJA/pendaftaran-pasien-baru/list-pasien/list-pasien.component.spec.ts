import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasienComponent } from './list-pasien.component';

describe('ListPasienComponent', () => {
  let component: ListPasienComponent;
  let fixture: ComponentFixture<ListPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
