import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Book } from './book.model';
import { BooksStore } from './books.store';
import { mapTo } from 'rxjs/operators';
import { timer } from "rxjs";
import { books } from "../books.data";
import { BooksQuery } from "./books.query";

@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(private booksStore: BooksStore, private http: HttpClient,private booksQuery: BooksQuery,) {
  }


  get() {
    /*
    return this.http.get<Book[]>('https://api.com').pipe(tap(entities => {
      this.booksStore.set(entities);
    }));
    */

    timer(1000).pipe(mapTo(books))
    .subscribe( books =>{ 
      this.booksStore.set(books);
      console.log(this.booksStore["storeValue"]["entities"])
    });
  

  }

  getBook(id: ID){
    if(this.booksQuery.hasEntity(id)){
      return this.booksQuery.selectEntity(id);
    }
  }

  add(book: Book) {
    this.booksStore.add(book);
  }

  update(id, book: Partial<Book>) {
    this.booksStore.update(id, book);
  }

  remove(id: ID) {
    this.booksStore.remove(id);
    console.log(this.booksStore["storeValue"]["entities"])
  }

}
