import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReturPemakaianInternalComponent } from './input-retur-pemakaian-internal.component';

describe('InputReturPemakaianInternalComponent', () => {
  let component: InputReturPemakaianInternalComponent;
  let fixture: ComponentFixture<InputReturPemakaianInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReturPemakaianInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReturPemakaianInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
