import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { environment } from '../environments/environment';
@Injectable()
export class AdminService {

  private usersUrl;
  private userBooksUrl;
  private newsUrl;
  private headers: Headers;
  private _listOfUsers;
  private options;
  private _map = new Map<string, Array<any>>(); 

  constructor(private http: Http) { 
    this.usersUrl = environment.usersUrl;
    this.userBooksUrl = environment.userBooksUrl;
    this.newsUrl = environment.newsUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append("Authorization", "Basic " + btoa("john123:password"));
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
    url = url.concat(userId + "/" + bookId);
    console.log(url);
    return this.http.put(url, state,
      this.options);
  }
  getBooksForUsers() {
    return this.http.get(this.userBooksUrl,
      this.options);
  }

  createNews(title, content) {
    let body = {
      title: title,
      content: content
    }
    this.http.post(this.newsUrl, JSON.stringify(body),
                  this.options).subscribe(response => {
                                        console.log(response.json())
                                        
                                      })
  }

}
