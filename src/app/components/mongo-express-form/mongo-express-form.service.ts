import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MongoExpressFormService {
  private url = "http://localhost:3000/api/books";
  constructor(private http: HttpClient, private data: DataService) { }

  saveBook(post) {
    let postRequest = this.http.post(this.url, post);
    let getRequest = this.http.get(this.url);
    let concatObservable = Observable.concat(postRequest, getRequest);

    concatObservable.subscribe(response=> this.data.setBooks(response));
  }
}