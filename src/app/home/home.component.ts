import { ProductItem } from './../product/item.model';
import { Component, OnInit } from '@angular/core';
import { itemData } from '../product/itemData';
import { DialogModelComponent } from '../dialog-model/dialog-model.component';
import { MatDialog } from '@angular/material/dialog';
import { UpadateitemComponent } from '../upadateitem/upadateitem.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allItems: ProductItem[] = [];
  displayItems: ProductItem[] = [];
  currentIndex = 0;
  loading = false;
  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.allItems = itemData;
    const savedItems = localStorage.getItem('savedItems');
    if (savedItems) {
      this.allItems = JSON.parse(savedItems);
    } else {
      this.allItems = itemData;
    }

    if (this.currentIndex >= this.allItems.length || this.loading) {
      return;
    }
    this.loadMore();
  }

  //edit item
  editItem(item: ProductItem): void {
    const dialogRef = this.dialog.open(UpadateitemComponent, {
      data: { ...item, isEditing: true }
    })

    document.body.classList.add('blur-background');
    dialogRef.afterClosed().subscribe((updated: ProductItem) => {
      if (updated) {
        const itemUpdate = this.allItems.findIndex(itemIndex => itemIndex.id === updated.id);
        if (itemUpdate !== -1) {
          this.savedItem(this.allItems[itemUpdate], updated.name, updated.desc, updated.img)
        }
      }
    })
  }

  savedItem(item: ProductItem, desc: string, name: string, img: string): void {
    item.desc = desc.trim();
    item.name = name.trim();
    item.img = img.trim();
    item.isEditing = false
    localStorage.setItem('savedItems', JSON.stringify(this.allItems));
  }
  // end edit function

  // reset all changes
  // delete item
  deleteItem(item: ProductItem): void {
    const dialogRef = this.dialog.open(DialogModelComponent, {
      // data: item,
      data: `Are you sure you want to delete ${item.name}?`
    });

    document.body.classList.add('blur-background');
    dialogRef.afterClosed().subscribe(result => {
      document.body.classList.remove('blur-background');
      if (result) {

        this.allItems = this.allItems.filter(data => data.id !== item.id);
        this.displayItems = this.displayItems.filter(data => data.id !== item.id);
        localStorage.setItem('savedItems', JSON.stringify(this.allItems));

      }
    })
  }
  resetChanges(): void {
    localStorage.removeItem('savedItems');
    this.allItems = itemData;
    this.displayItems = [];
    this.currentIndex = 0;
    this.loading = false;
    this.loadMore();
  }
  loadMore(): void {
    this.loading = true;
    setTimeout(() => {
      const newItems = this.allItems.slice(this.currentIndex, this.currentIndex + 10);
      this.displayItems = [...this.displayItems, ...newItems];
      this.currentIndex += 10;
      this.loading = false;
    }, 1000);
  };

  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 20 && !this.loading && this.currentIndex < this.allItems.length) {
      this.loadMore();
    }
  }
}


