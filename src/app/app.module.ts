import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

import { FormsModule} from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientService } from './service/http-client.service';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
