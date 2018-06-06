import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class BookService {

  private booksUrl = 'http://localhost:8080/library/books/';
  private rentingUrl = 'http://localhost:8080/library/userBooks/'
  private headers: Headers;
  private options;

  constructor( private http: Http) { 

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  getBooksFromSpecificCategory(categoryNumber) {
    let url;
    url = this.booksUrl.concat(categoryNumber);
    console.log(url);
    return this.http.get(url,
                  this.options);

  }
  getUserBooksRented() {
    let url;
    let userId = sessionStorage.getItem("userId");
    url = this.rentingUrl.concat(userId);

    return this.http.get(url,
                  this.options);
  }

  rentBook(bookId: any, startDate, endDate) {

    let time = new Date();
    let body = {
      start: startDate,
      end: endDate,
      status: "PENDING"
    }
    let url;
    let userId = sessionStorage.getItem("userId");
    url = this.rentingUrl.concat(userId + "/" + bookId);
 
    this.http.post(url, JSON.stringify(body),
                  this.options).subscribe(response => {
                                      
                                        console.log(response.json())
                                        
                                      })
  }

  cancelBook(bookId: any) {
    let url;
    let userId = sessionStorage.getItem("userId");
    url = this.rentingUrl.concat(userId + "/" + bookId);

    this.http.delete(url,
    this.options).subscribe(response => {
                          console.log(response);
                        })
  }
  rateBook(rating, id) {
    let userId = sessionStorage.getItem("userId");
    let url;
    url = this.booksUrl.concat(id + "/" + userId);
    console.log(url);
    return this.http.put(url,rating,
                  this.options);
  }

}
