import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MongoExpressService {
  private url = "http://localhost:3000/api/books";
  constructor(private http: HttpClient, private data: DataService) { }


  deleteBook(bookToDelete) {

    let deleteRequest = this.http.delete(this.url + '/' + bookToDelete);
    let getRequest = this.http.get(this.url);
    let concatObservable = Observable.concat(deleteRequest, getRequest);

    concatObservable.subscribe(response=> this.data.setBooks(response));
  }
}
