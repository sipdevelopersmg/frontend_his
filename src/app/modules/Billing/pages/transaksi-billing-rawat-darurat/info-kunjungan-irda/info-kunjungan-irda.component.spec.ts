import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoKunjunganIrdaComponent } from './info-kunjungan-irda.component';

describe('InfoKunjunganIrdaComponent', () => {
  let component: InfoKunjunganIrdaComponent;
  let fixture: ComponentFixture<InfoKunjunganIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoKunjunganIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoKunjunganIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
