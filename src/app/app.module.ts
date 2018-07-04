import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';

import { SocialLoginModule, AuthServiceConfig } from "angular5-social-login";
import { FacebookLoginProvider } from "angular5-social-login";
import { getAuthServiceConfigs } from "./socialloginConfig";

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
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { MybooksComponent } from './mybooks/mybooks.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import {LoginService} from './login.service';
import {BookService} from './book.service';
import { AdminService } from './admin.service';
import { BookrentingComponent } from './bookrenting/bookrenting.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { NeutronRatingModule } from 'neutron-star-rating';
import { BookComponent } from './book/book.component';
import { ChatComponent } from './chat/chat.component';
import { DsService } from './ds.service';


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
    BookrentingComponent,
    BookdetailsComponent,
    AdminHomePageComponent,
    BookComponent,
    ChatComponent
  ],
  imports: [
    NeutronRatingModule,
    BrowserModule,
    SocialLoginModule,
    HttpModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatListModule,
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
      {path: 'books', component: AllbooksComponent},
      {path: 'books/:id', component: AllbooksComponent},
      {path: 'mybooks', component: MybooksComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'admin-page', component: AdminHomePageComponent}
      
    ], {useHash: true})
  ],
  entryComponents: [
    BookrentingComponent,
    BookdetailsComponent
  ],
  providers: [LoginService, BookService, AdminService, DsService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
