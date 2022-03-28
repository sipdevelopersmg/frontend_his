import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAntrianTerprogramComponent } from './update-antrian-terprogram.component';

describe('UpdateAntrianTerprogramComponent', () => {
  let component: UpdateAntrianTerprogramComponent;
  let fixture: ComponentFixture<UpdateAntrianTerprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAntrianTerprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAntrianTerprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
