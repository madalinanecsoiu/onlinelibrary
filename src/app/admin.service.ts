import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class AdminService {

  private usersUrl = 'http://localhost:8080/library/users';
  private userBooksUrl = 'http://localhost:8080/library/userBooks';
  private headers: Headers;
  private _listOfUsers;
  private options;
  private _map = new Map<string, Array<any>>(); 

  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  get listOfUsers() {
    console.log(this._listOfUsers);
    return this._listOfUsers;
  }
  get map() {
    return this._map;
  }
  requestListOfUsers() {
    return this.http.get(this.usersUrl,
      this.options);
    
  }
  updateStateOfBookRenting(userId, bookId, state) {

    let url = this.userBooksUrl;
    url = url.concat("/" + userId + "/" + bookId);
    console.log(url);
    return this.http.put(url, state,
      this.options);
  }
  getBooksForUsers() {
    return this.http.get(this.userBooksUrl,
      this.options);
  }

}
