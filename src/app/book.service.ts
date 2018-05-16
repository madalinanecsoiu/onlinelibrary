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

  getBooksFromSpecificCategory(category: any) {
    let url;
    url = this.booksUrl.concat(category);
    console.log(url);
    return this.http.get(url,
                  this.options);
  }
  rentBook(bookId: any) {
    let userId = sessionStorage.getItem("userId");

    let time = new Date();
    let body = {
      start: time.toString(),
      end: time.toString(),
      status: "RENTING"
    }
    let url;
    url = this.rentingUrl.concat(userId);
    url = url.concat("/");
    url = url.concat(bookId);

    this.http.post(url, JSON.stringify(body),
                  this.options).subscribe(response => {
                                        console.log("===============")
                                        
                                        console.log(response.json())
                                        
                                      })
  }
  getUserBooksRented() {
    let userId = sessionStorage.getItem("userId");
    let url;
    url = this.rentingUrl.concat(userId);
    return this.http.get(url,
                  this.options);
  }

  cancelBook(bookId: any) {
    let url;
    let userId = sessionStorage.getItem("userId");

    url = this.rentingUrl.concat(userId);
    url = url.concat("/");
    url = url.concat(bookId);
    this.http.delete(url,
    this.options).subscribe(response => {
                          console.log("===============")
                          console.log(response.json())
                        })
  }

}
