import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {ActivatedRoute, Router} from '@angular/router'
import { environment } from '../environments/environment';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular5-social-login';
@Injectable()
export class LoginService {

  private loginUrl;
  private createUserUrl;
  private headers: Headers;
  private customerid: Number;
  private isLoggedIn: BehaviorSubject<boolean>;

  constructor(private http: Http, private router: Router, private socialAuthService: AuthService) {
    this.loginUrl = environment.usersUrl + "login";
    this.createUserUrl = environment.usersUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.isLoggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
    console.log(this.loginUrl);
   }
   get IsLoggedIn() {
     return this.isLoggedIn.asObservable();
   }

   setIsLoggedIn() {
      this.isLoggedIn.next(true);
   }
   tokenAvailable() {
     if(sessionStorage.length != 0)
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
    if(sessionStorage.length == 0) {
      this.router.navigate(['']);
      return;
     }
     
    this.socialAuthService.authState.subscribe(response => {
      if(response.email != null) {
        this.socialAuthService.signOut().then( () => { 

        });
      }
        this.isLoggedIn.next(false);
          sessionStorage.clear();
          this.router.navigate(['']);
     
    }).unsubscribe();

     
   }

   registerUser(body) {
    const options = new RequestOptions({headers: this.headers});
    console.log(body)
    return this.http.post(this.createUserUrl, JSON.stringify(body),
                options);
   }

   sendToRestApiMethod(email: string, name) : void{
    const options = new RequestOptions({headers: this.headers});
     console.log(email);
     let body = {
      email: email,
      lastName: name
    }
    this.http.post(environment.loginfb,body, options)
        .subscribe(response => {
              this.setIsLoggedIn();
              sessionStorage.setItem("userId",  response.text());
              this.router.navigate(['books']);
               }
        );
      }
}
