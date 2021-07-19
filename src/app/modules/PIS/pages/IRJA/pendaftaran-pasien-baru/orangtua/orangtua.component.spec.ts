import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangtuaComponent } from './orangtua.component';

describe('OrangtuaComponent', () => {
  let component: OrangtuaComponent;
  let fixture: ComponentFixture<OrangtuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangtuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangtuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
