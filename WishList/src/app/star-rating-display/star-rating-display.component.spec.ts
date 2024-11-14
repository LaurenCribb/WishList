import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingDisplayComponent } from './star-rating-display.component';

describe('StarRatingDisplayComponent', () => {
  let component: StarRatingDisplayComponent;
  let fixture: ComponentFixture<StarRatingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarRatingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
