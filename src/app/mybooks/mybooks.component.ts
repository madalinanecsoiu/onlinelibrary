import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

 listOfBooks:Array<any>;
  
  constructor(private bookService: BookService, private dialog: MatDialog,private router: Router) { 
   
  }
  ngOnInit() {
      this.bookService.getUserBooksRented().subscribe( response => {this.listOfBooks = response.json(); console.log(response.json());});
  }
 
}
