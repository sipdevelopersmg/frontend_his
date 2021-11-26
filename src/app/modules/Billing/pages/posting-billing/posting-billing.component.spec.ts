import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingBillingComponent } from './posting-billing.component';

describe('PostingBillingComponent', () => {
  let component: PostingBillingComponent;
  let fixture: ComponentFixture<PostingBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
