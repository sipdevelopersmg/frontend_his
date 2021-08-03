import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosaComponent } from './diagnosa.component';

describe('DiagnosaComponent', () => {
  let component: DiagnosaComponent;
  let fixture: ComponentFixture<DiagnosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
