import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResepFormulariumIrdaComponent } from './base-resep-formularium-irda.component';

describe('BaseResepFormulariumIrdaComponent', () => {
  let component: BaseResepFormulariumIrdaComponent;
  let fixture: ComponentFixture<BaseResepFormulariumIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseResepFormulariumIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseResepFormulariumIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
