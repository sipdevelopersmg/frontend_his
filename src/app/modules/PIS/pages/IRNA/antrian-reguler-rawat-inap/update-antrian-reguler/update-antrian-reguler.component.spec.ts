import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAntrianRegulerComponent } from './update-antrian-reguler.component';

describe('UpdateAntrianRegulerComponent', () => {
  let component: UpdateAntrianRegulerComponent;
  let fixture: ComponentFixture<UpdateAntrianRegulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAntrianRegulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAntrianRegulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
