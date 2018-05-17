import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  listOfBooks:Array<any>;
  constructor(private bookService: BookService) { 
    this.listOfBooks = [{bookName: "Ana", status: "RENTING", rating: 2.5}, {bookName: "Maria", status: "RENTED", rating: 3.2}
                               , {bookName: "Marius", status: "READED", rating: 2.6}, {bookName: "Ana", status: "RENTING", rating: 2.5}, {bookName: "Maria", status: "RENTED", rating: 3.2}
                               , {bookName: "Marius", status: "READED", rating: 2.6}];
     /* this.bookService.getUserBooksRented().
                    subscribe( response => (this.listOfBooks = response.json()));*/
   }

  ngOnInit() {
  }

}
