import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {BookService} from '../book.service';
import {AdminService} from '../admin.service';
import { Router } from '@angular/router';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  customerid;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(private loginService: LoginService,private bookService: BookService, private adminService: AdminService, private router: Router
    , private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  login() {

    this.loginService.login(this.email.value, this.password.value).subscribe(response => {
      console.log(response.text())
      this.customerid = Number(response.text());
      switch(this.customerid) {
        case -2:
                 this.router.navigate(['./admin-page']);
                 break;
        default:
          this.loginService.setIsLoggedIn();
          sessionStorage.setItem("userId", this.customerid.toString());
          this.router.navigate(['books']);
          
      }   
    });

  }

  register() {
    this.router.navigate(['/sign-up']);
  }

  public facebookLogin() {
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
              //this will return user data from facebook. What you need is a user token which you will send it to the server
              this.loginService.sendToRestApiMethod(userData.email, userData.name);
       }
    );
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getPasswordErrorMessage() {
    if(this.password.hasError('required'))
     return 'You must enter a value';
  }
  getPasswordInvalidErrorMessage() {
    if(this.customerid == 0)
     return 'Wrong password! Please, try again';
  }
  getInexistentAccountErrorMessage() {
    if(this.customerid == -1)
     return 'You does not have any account! Please, register';
  }


}
