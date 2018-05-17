import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  private listOfBooks: Array<any> = [];
  categories:any;

  constructor(private bookService: BookService) {
      this.listOfBooks = [];
   }


  getBooks(categoryId) {
    this.listOfBooks = [{bookName: "Romeo si Julieta", status: "AVAILABLE", id: "5", rating:4.5,
    description:"Piesa începe într-o piață publică din Verona unde Samson si Gregorio poartă discuții despre ura lor față de familile rivale. Aceștia încep să se lupte. Apoi își face apariția și Benvolio care încearcă să-i despartă, dar lupta continuă o dată ce vine și Tybalt. Toți aceștia au fost convinși să renunțe la conflict de către copiii celor două familii. Apoi Lady Montague întreabă de Romeo, iar Benvolio și Montague își fac planuri pentru a-l face să renunțe la iubirea care-l mistuie.", 
      author:"William Shakespeare",
              publisher:"Namira"}, {bookName: "Maria", status: "RENTED", rating: 3.2}
                               , {bookName: "Marius", status: "READED", rating: 2.6}, {bookName: "Ana", status: "RENTING", rating: 2.5}, {bookName: "Maria", status: "RENTED", rating: 3.2}
                               , {bookName: "Marius", status: "READED", rating: 2.6}];
    /*console.log(categoryId);
    this.bookService.getBooksFromSpecificCategory(categoryId).
                     subscribe( response => {this.listOfBooks = response.json(); console.log(response.json());}
                                );
    */

  }

  ngOnInit() {
  }

}
