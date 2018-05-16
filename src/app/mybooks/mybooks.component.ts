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
    // this.listOfBooks= [{bookName: "aNA"}];
      this.bookService.getUserBooksRented().
                    subscribe( response => (this.listOfBooks = response.json()));
   }

  ngOnInit() {
  }

}
