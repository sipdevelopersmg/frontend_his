import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssemblyComponent } from './view-assembly.component';

describe('ViewAssemblyComponent', () => {
  let component: ViewAssemblyComponent;
  let fixture: ComponentFixture<ViewAssemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
