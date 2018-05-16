import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  private listOfBooks: Array<any> = [];
  private numberOfBooksDisplayedInPage = 4;
  paginatorSize = 8;
  constructor(private bookService: BookService) { }


  getBooks(categoryId) {
    console.log(categoryId);
    this.bookService.getBooksFromSpecificCategory(categoryId).
                     subscribe( response => {this.listOfBooks = response.json(); console.log(response.json());}
                                );
  }
  updateBooksDisplayedInPage(){
      
  }
  ngOnInit() {
  }

}
