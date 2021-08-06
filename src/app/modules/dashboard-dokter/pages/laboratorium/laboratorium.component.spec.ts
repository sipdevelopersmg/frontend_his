import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriumComponent } from './laboratorium.component';

describe('LaboratoriumComponent', () => {
  let component: LaboratoriumComponent;
  let fixture: ComponentFixture<LaboratoriumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoriumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
