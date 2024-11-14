import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating-display',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './star-rating-display.component.html',
  styleUrl: './star-rating-display.component.css'
})
export class StarRatingDisplayComponent {
 star = faStar;

 @Input() rating! : number;
 @Output() newRating = new EventEmitter<number>();

 numSequence(value: number): number[] {
    return Array(value);
 }

 setRating(value: number) {
  this.rating = value;
  this.newRating.emit(this.rating);
 }

}
