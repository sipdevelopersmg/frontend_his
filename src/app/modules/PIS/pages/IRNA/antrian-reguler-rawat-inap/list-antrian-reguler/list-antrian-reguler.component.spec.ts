import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAntrianRegulerComponent } from './list-antrian-reguler.component';

describe('ListAntrianRegulerComponent', () => {
  let component: ListAntrianRegulerComponent;
  let fixture: ComponentFixture<ListAntrianRegulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAntrianRegulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAntrianRegulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
