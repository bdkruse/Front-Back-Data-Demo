import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class MysqlPhpService {

  url = "http://localhost/mysql-php-demo/public/football";
  constructor(private http: HttpClient, private data: DataService) { }

  deletePlayer(playerToDelete) {
    
    let deleteRequest = this.http.delete(this.url + '/delete/' + playerToDelete);
    let getRequest = this.http.get(this.url);
    let concatObservable = Observable.concat(deleteRequest, getRequest);

    concatObservable.subscribe(response=> this.data.setRoster(response));
  }
}
