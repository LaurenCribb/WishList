import { Component } from '@angular/core';
import { placeholderItems } from '../placeholder-items';
import { NgFor } from '@angular/common';
import { StarRatingDisplayComponent } from '../star-rating-display/star-rating-display.component';
import { WishListItem } from '../interfaces/wish-list-item';

@Component({
  selector: 'app-wish-list-items',
  standalone: true,
  imports: [NgFor, StarRatingDisplayComponent],
  templateUrl: './wish-list-items.component.html',
  styleUrl: './wish-list-items.component.css'
})
export class WishListItemsComponent {
  items: WishListItem[] = placeholderItems;
}
