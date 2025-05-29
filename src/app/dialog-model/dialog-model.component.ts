import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-model',
  templateUrl: './dialog-model.component.html',
  styleUrls: ['./dialog-model.component.css']
})
export class DialogModelComponent implements OnInit {

  constructor(public dialogRef :MatDialogRef <DialogModelComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }

}
