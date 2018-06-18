import { MysqlPhpFormService } from './mysql-php-form.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-mysql-php-form',
  templateUrl: './mysql-php-form.component.html',
  styleUrls: ['./mysql-php-form.component.css']
})
export class MysqlPhpFormComponent implements OnInit {
  constructor(private data:DataService, private mysqlFormService: MysqlPhpFormService) { }

  ngOnInit() {  
  }

  onSubmit(form) {
    let post = '{"playername":"' + form.value.playername + 
               '","team":"' + form.value.team +
               '","jerseynumber":"' + form.value.jerseynumber +
               '","position":"' + form.value.position +
               '"}';
    let postEncode = JSON.parse(post);

    this.mysqlFormService.savePlayer(postEncode);

    form.reset();

  }

}
