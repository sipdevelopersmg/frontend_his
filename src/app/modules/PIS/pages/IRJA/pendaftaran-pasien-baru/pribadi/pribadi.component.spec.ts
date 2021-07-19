import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PribadiComponent } from './pribadi.component';

describe('PribadiComponent', () => {
  let component: PribadiComponent;
  let fixture: ComponentFixture<PribadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PribadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PribadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
