import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishListItemsComponent } from './wish-list-items/wish-list-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishListItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WishList';
}
