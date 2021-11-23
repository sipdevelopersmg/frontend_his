import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAkomodasiComponent } from './list-akomodasi.component';

describe('ListAkomodasiComponent', () => {
  let component: ListAkomodasiComponent;
  let fixture: ComponentFixture<ListAkomodasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAkomodasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAkomodasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
