import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  private listOfUsers;
  private temporaryList;
  map = new Map<string, Array<any>>(); 
  email = new FormControl('', [Validators.required, Validators.email]);
  dataSource;

  displayedColumns = ['name','start', 'end'];

  constructor(private adminService: AdminService, private authService: LoginService) {
      console.log(this);
  }

  ngOnInit() {
    this.adminService.requestListOfUsers().subscribe( response => {this.listOfUsers = response.json(); console.log(this.listOfUsers) }
  );
    this.adminService.getBooksForUsers().subscribe( response => {this.temporaryList = response.json(); console.log(this.temporaryList)});
  }

  showBooksOfRequestedUser() {
    this.adminService.getBooksForUsers().subscribe( response => {this.temporaryList = response.json(); console.log(this.temporaryList)
      let books: Array<any>;
      for(var user of this.listOfUsers) {
        if(user.email != 'admin@upb.com') {
          books = new Array<any>();
          for(var bookRenting of this.temporaryList) {
            if(bookRenting.user.id == user.id) {
              books.push({id: bookRenting.book.id, name: bookRenting.book.bookName, userId: bookRenting.user.id, status: bookRenting.stateOfRenting});
            }
          }
          this.map.set(user.email, books);
        }
      }
      console.log(this.map);
      this.dataSource = this.map.get(this.email.value);
      console.log(this.dataSource);
    }
  );
    
  }

  logout() {
    this.authService.logout();
  }
  //updateaza bookrenting cu 
  startBookReading(bookId, userId) {
    this.adminService.updateStateOfBookRenting(userId, bookId, "READING").subscribe(response => {console.log(response.json); this.showBooksOfRequestedUser();}
  );
  }

  endBookReading(bookId, userId) {
    this.adminService.updateStateOfBookRenting(userId, bookId, "FINISHED").subscribe(response => {console.log(response.json); this.showBooksOfRequestedUser(); }
  );
  }

  checkAvailability(status) {
    if(status == "READING")
      return true;
    return false;
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }



}
