import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks: any;
  isLoggedIn$;

  constructor(private loginService: LoginService) { 
    this.isLoggedIn$ = this.loginService.IsLoggedIn;
    console.log(this.isLoggedIn$);
  }
  ngOnInit() {
  
  }
  logout() {
    this.loginService.logout();
  }
 



}
