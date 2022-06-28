import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResepIrdaComponent } from './base-resep-irda.component';

describe('BaseResepIrdaComponent', () => {
  let component: BaseResepIrdaComponent;
  let fixture: ComponentFixture<BaseResepIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseResepIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseResepIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
