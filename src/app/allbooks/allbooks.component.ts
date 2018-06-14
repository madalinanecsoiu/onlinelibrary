import { Component, OnInit, ViewChild} from '@angular/core';
import { BookrentingComponent } from '../bookrenting/bookrenting.component';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  private listOfBooks: Array<any> = [];
  private temporaryList:Array<any> = [];
  categories:any;
  startdate:any;
  enddate: any;
  categoryId;
  pathImage = "../assets/book.png";
  homeImagePath = "../assets/mainpage.png";
  categoryPathImage;
  private sub;
  public data = null;
  public pageSize = 8;
  public currentPage = 0;
  public totalSize = 0;
  news;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bookService: BookService, private dialog: MatDialog, private route: ActivatedRoute,  private router: Router) {
      
  }

  ngOnInit() {
    this.bookService.getAllNews().subscribe(response => {this.news= response.json();});

    this.sub = this.route.params.subscribe( params => {this.categoryId = params['id'];  
    if(this.categoryId != null)
      this.bookService.getBooksFromSpecificCategory(this.categoryId)
        .subscribe( response => {this.listOfBooks = response.json();this.iterator(); this.totalSize = this.listOfBooks.length;
        this.currentPage = 0; this.getCategoryImage(Number(this.categoryId));
      }); });
   
  }
  getCategoryImage(categoryId) {
    switch(categoryId) {
      case 1: this.categoryPathImage =  "../assets/beletristica.png"; break;
      case 2: this.categoryPathImage =  "../assets/cariera.png";break;
      case 3: this.categoryPathImage =  "../assets/comunicare.png";break;
      case 4: this.categoryPathImage =  "../assets/dezv.png";break;
      case 5: this.categoryPathImage =  "../assets/tehno.png";break;
    }
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  public iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.listOfBooks.slice(start, end);
    this.data = part;
  }
  getBooks(categoryId) {
    this.router.navigate(['books', categoryId]);
  }

  openRentDialog(id) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '25%';
    dialogConfig.width = '500px';
  
    dialogConfig.hasBackdrop = false;
    const dialogRef = this.dialog.open(BookrentingComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data =>  {
        if(data != null) {
            let startDate  = data.startDate.getFullYear() + "/" + (data.startDate.getMonth() + 1) + "/" + data.startDate.getDate();
            let endDate  = data.endDate.getFullYear() + "/" + (data.endDate.getMonth() + 1) + "/" + data.endDate.getDate();
            this.bookService.rentBook(id, startDate, endDate);
        }
        console.log("Dialog output:", data);
       }
  );  
}
  openDetailsDialog(book) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.hasBackdrop = false;
    dialogConfig.data = book;
    dialogConfig.width = '500px';
    dialogConfig.height = '45%';
    const dialogRef = this.dialog.open(BookdetailsComponent, dialogConfig);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
