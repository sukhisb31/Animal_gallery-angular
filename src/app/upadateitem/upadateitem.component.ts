import { Component, Inject , OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductItem } from '../product/item.model';

@Component({
  selector: 'app-upadateitem',
  templateUrl: './upadateitem.component.html',
  styleUrls: ['./upadateitem.component.css']
})
export class UpadateitemComponent implements OnInit {

  updatedItem: ProductItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductItem, private dialogRef: MatDialogRef<UpadateitemComponent>
  ) {
    this.updatedItem = {...data}
   }

   onSave(): void {
    this.dialogRef.close(this.updatedItem);
   }

   onCancel(): void {
    this.dialogRef.close();
   }

  ngOnInit(): void {
  }

  
}

