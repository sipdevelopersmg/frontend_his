import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBedTransferComponent } from './list-bed-transfer.component';

describe('ListBedTransferComponent', () => {
  let component: ListBedTransferComponent;
  let fixture: ComponentFixture<ListBedTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBedTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBedTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
