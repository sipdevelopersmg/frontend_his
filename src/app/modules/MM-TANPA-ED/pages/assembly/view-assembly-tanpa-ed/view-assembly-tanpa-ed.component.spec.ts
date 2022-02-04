import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssemblyTanpaEdComponent } from './view-assembly-tanpa-ed.component';

describe('ViewAssemblyTanpaEdComponent', () => {
  let component: ViewAssemblyTanpaEdComponent;
  let fixture: ComponentFixture<ViewAssemblyTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssemblyTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssemblyTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
