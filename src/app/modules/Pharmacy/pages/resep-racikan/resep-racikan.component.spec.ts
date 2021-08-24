import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResepRacikanComponent } from './resep-racikan.component';

describe('ResepRacikanComponent', () => {
  let component: ResepRacikanComponent;
  let fixture: ComponentFixture<ResepRacikanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResepRacikanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResepRacikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
