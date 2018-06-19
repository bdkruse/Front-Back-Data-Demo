import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookList } from './../models/bookList';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService implements OnInit {
  
  private bookList = new BehaviorSubject<BookList>({data: null});
  books = this.bookList.asObservable(); 

  private playerList = new BehaviorSubject<any>({data: null});
  roster = this.playerList.asObservable(); 

  booksUrl = 'http://localhost:3000/api/books';
  rosterUrl = 'http://localhost/fronttoback-mysql-php-api/public/football';

  constructor(private http: HttpClient) {

    this.http.get(this.booksUrl)
      .subscribe((response) => 
      this.setBooks(response));

    this.http.get(this.rosterUrl)
      .subscribe((response) => 
      this.setRoster(response));

  }

  ngOnInit() {
  }

  setBooks(booksToSet){
    this.bookList.next(booksToSet);
  }

  setRoster(playerToSet){
    this.playerList.next(playerToSet);
  }
}
