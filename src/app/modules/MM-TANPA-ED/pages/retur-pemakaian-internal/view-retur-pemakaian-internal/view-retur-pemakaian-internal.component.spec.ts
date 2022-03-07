import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReturPemakaianInternalComponent } from './view-retur-pemakaian-internal.component';

describe('ViewReturPemakaianInternalComponent', () => {
  let component: ViewReturPemakaianInternalComponent;
  let fixture: ComponentFixture<ViewReturPemakaianInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReturPemakaianInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReturPemakaianInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
