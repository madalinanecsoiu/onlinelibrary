import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { BookrentingComponent } from '../bookrenting/bookrenting.component';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  @Input() book: any;

  startdate:any;
  enddate: any;
  constructor(private dialog: MatDialog) {
   }

  ngOnInit() {
  }

  logModel(event) {
    console.log(event);
  }
  openRentDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.hasBackdrop = false;
    const dialogRef = this.dialog.open(BookrentingComponent, dialogConfig);

  // daca vine undefined = a dat cancel
  // daca are date = trimitem la backend
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );  
}
  openDetailsDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.hasBackdrop = false;
    dialogConfig.data = this.book;
    dialogConfig.width = '500px';
    const dialogRef = this.dialog.open(BookdetailsComponent, dialogConfig);

    // daca vine undefined = a dat cancel
    // daca are date = trimitem la backend
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );  
  }

}
