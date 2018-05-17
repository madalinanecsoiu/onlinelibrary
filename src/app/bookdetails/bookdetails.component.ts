import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<BookdetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
   }

  ngOnInit() {
    
  }

  close() {
      this.dialogRef.close();
  }
}
