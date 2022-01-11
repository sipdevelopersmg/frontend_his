import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAssemblyComponent } from './input-assembly.component';

describe('InputAssemblyComponent', () => {
  let component: InputAssemblyComponent;
  let fixture: ComponentFixture<InputAssemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAssemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
