import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAssemblyTanpaEdComponent } from './input-assembly-tanpa-ed.component';

describe('InputAssemblyTanpaEdComponent', () => {
  let component: InputAssemblyTanpaEdComponent;
  let fixture: ComponentFixture<InputAssemblyTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAssemblyTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAssemblyTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
