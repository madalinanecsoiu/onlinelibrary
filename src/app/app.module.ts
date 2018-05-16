import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MybooksComponent } from './mybooks/mybooks.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import {LoginService} from './login.service';
import {BookService} from './book.service';
import { SinglebookComponent } from './singlebook/singlebook.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    MybooksComponent,
    AllbooksComponent,
    AboutusComponent,
    ContactComponent,
    SinglebookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'sign-up', component: RegisterComponent},
      {path: 'about-us', component: AboutusComponent},
      {path: 'books', component: AllbooksComponent},
      {path: 'mybooks', component: MybooksComponent},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [LoginService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
