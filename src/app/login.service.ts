import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {ActivatedRoute, Router} from '@angular/router'

@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:8080/library/users/login';
  private createUserUrl = 'http://localhost:8080/library/users';
  private headers: Headers;
  private customerid: Number;
  private isLoggedIn: BehaviorSubject<boolean>;

  constructor(private http: Http, private router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.isLoggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
   }
   get IsLoggedIn() {
     return this.isLoggedIn.asObservable();
   }

   setIsLoggedIn() {
      this.isLoggedIn.next(true);
   }
   tokenAvailable() {
     if(window.sessionStorage.length != 0)
        return true;
      return false;
   }
   login(username, password){
      let body = {
        email: username,
        password: password
      }
      const options = new RequestOptions({headers: this.headers});
      console.log(body)
      return this.http.post(this.loginUrl, JSON.stringify(body),
                  options);
   }

   logout() {
     this.isLoggedIn.next(false);
     window.sessionStorage.clear();
     this.router.navigate(['']);
   }

   registerUser(body) {
    const options = new RequestOptions({headers: this.headers});
    console.log(body)
    return this.http.post(this.createUserUrl, JSON.stringify(body),
                options);
   }
}
