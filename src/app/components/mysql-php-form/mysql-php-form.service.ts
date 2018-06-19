import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MysqlPhpFormService {
  url = "http://localhost/fronttoback-mysql-php-api/public/football";

  constructor(private http: HttpClient, private data: DataService) { }

  savePlayer(post) {
    let postRequest = this.http.post(this.url + '/add', post);
    let getRequest = this.http.get(this.url);
    let concatObservable = Observable.concat(postRequest, getRequest);

    concatObservable.subscribe(response=> this.data.setRoster(response));
  }
}
