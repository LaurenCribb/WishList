import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating-display',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './star-rating-display.component.html',
  styleUrl: './star-rating-display.component.css'
})
export class StarRatingDisplayComponent {
 coffee = faCoffee;
}
