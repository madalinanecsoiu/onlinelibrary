import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  college = new FormControl('', [Validators.required]);

  hide = true;
  constructor(private router: Router, private loginService: LoginService) { 
  }

  ngOnInit() {
  }

  registerUser(){
    let body = {firstName: this.firstName.value, 
                lastName: this.lastName.value,
                email: this.email.value,
                college: this.college.value,
                password: this.password.value}
    console.log(body)

    this.loginService.registerUser(body).subscribe(response => {
      console.log(response.json)
      console.log(JSON.stringify(body))
    })

    this.router.navigate(['']);
      
  }

  cancelRegistration() {
    this.router.navigate(['']);
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
  getFirstNameErrorMessage() {
    if(this.firstName.hasError('required'))
     return 'You must enter a value';
  }
  getLastNameErrorMessage() {
    if(this.lastName.hasError('required'))
     return 'You must enter a value';
  }
  getCollegeErrorMessage() {
    if(this.college.hasError('required'))
     return 'You must enter a value';
  }
}
