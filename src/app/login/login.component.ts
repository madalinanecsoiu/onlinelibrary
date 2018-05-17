import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let customerid = 5;
    this.loginService.setIsLoggedIn();
    window.sessionStorage.setItem("userId", customerid.toString());
    this.router.navigate(['/books']);
    /*this.loginService.login(this.email.value, this.password.value).subscribe(response => {
      console.log(response.text())
      customerid = Number(response.text());
      switch(customerid) {
        case 0: 
        case -1: 
        default:
          this.loginService.setIsLoggedIn();
          window.sessionStorage.setItem("userId", customerid.toString());
          this.router.navigate(['/books']);
          
      }   
    });*/

  }

  register() {
    this.router.navigate(['/sign-up']);
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
}
