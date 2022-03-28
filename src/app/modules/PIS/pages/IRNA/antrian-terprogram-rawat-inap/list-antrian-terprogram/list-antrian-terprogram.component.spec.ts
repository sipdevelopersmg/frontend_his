import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAntrianTerprogramComponent } from './list-antrian-terprogram.component';

describe('ListAntrianTerprogramComponent', () => {
  let component: ListAntrianTerprogramComponent;
  let fixture: ComponentFixture<ListAntrianTerprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAntrianTerprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAntrianTerprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
