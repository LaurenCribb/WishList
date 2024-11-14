import { Component } from '@angular/core';
import { placeholderItems } from '../placeholder-items';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wish-list-items',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './wish-list-items.component.html',
  styleUrl: './wish-list-items.component.css'
})
export class WishListItemsComponent {
  items = placeholderItems;
  coffee = faCoffee
}
