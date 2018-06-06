import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() bookRenting: any;

  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit() {
  }


  openDetailsDialog(book) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.hasBackdrop = false;
    dialogConfig.data = book;
    dialogConfig.width = '500px';
    dialogConfig.height = '50%';
    const dialogRef = this.dialog.open(BookdetailsComponent, dialogConfig);
  }

  cancelBook(id) {
    this.bookService.cancelBook(id);
    
  }

  checkStatusOfRenting(status) {
    if(status == "PENDING")
      return false;
    return true;
  }
  public onRatingClicked = (rating, id) => {
    this.bookService.rateBook(rating, id).subscribe(response => {console.log(response.status); this.bookRenting= response.json();});
  }
}
