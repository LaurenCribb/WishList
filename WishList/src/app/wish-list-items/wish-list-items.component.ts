import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { placeholderItems } from '../placeholder-items';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { StarRatingDisplayComponent } from '../star-rating-display/star-rating-display.component';
import { WishListItem } from '../interfaces/wish-list-item';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-wish-list-items',
  standalone: true,
  imports: [NgFor, MatTableModule, MatSortModule, StarRatingDisplayComponent],
  templateUrl: './wish-list-items.component.html',
  styleUrl: './wish-list-items.component.css'
})
export class WishListItemsComponent implements AfterViewInit{
  private _liveAnnouncer = inject(LiveAnnouncer);
  itemsList: WishListItem[] = placeholderItems;
  items = new MatTableDataSource(placeholderItems);
  displayedColumns: string[] = ['#', 'image', 'name', 'starRating', 'price'];
  newRatingScore: number = 0;

  
  @ViewChild(MatSort) sort = new MatSort();

  ngAfterViewInit() {
    this.items.sort = this.sort;
  }
  
  setRating(newRating: number, i: number){
    this.itemsList[i].starRating = newRating;
    console.log(this.itemsList[i]);
  }

}
