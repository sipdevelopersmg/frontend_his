import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfoKematianComponent } from './detail-info-kematian.component';

describe('DetailInfoKematianComponent', () => {
  let component: DetailInfoKematianComponent;
  let fixture: ComponentFixture<DetailInfoKematianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInfoKematianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInfoKematianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
