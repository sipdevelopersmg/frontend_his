import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailAkomodasiComponent } from './list-detail-akomodasi.component';

describe('ListDetailAkomodasiComponent', () => {
  let component: ListDetailAkomodasiComponent;
  let fixture: ComponentFixture<ListDetailAkomodasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailAkomodasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailAkomodasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
