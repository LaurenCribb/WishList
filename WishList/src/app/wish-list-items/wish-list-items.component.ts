import { Component } from '@angular/core';
import { placeholderItems } from '../placeholder-items';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-wish-list-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './wish-list-items.component.html',
  styleUrl: './wish-list-items.component.css'
})
export class WishListItemsComponent {
  items = placeholderItems;
}
