import { MysqlPhpService } from './mysql-php.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mysql-php',
  templateUrl: './mysql-php.component.html',
  styleUrls: ['./mysql-php.component.css']
})
export class MysqlPhpComponent implements OnInit {
  private roster; 
  subscription: Subscription;

  constructor(private data: DataService, private mysqlService: MysqlPhpService) {
  }

  ngOnInit() {
    this.subscription = this.data.roster.subscribe(playerList => this.roster = playerList);
  }

  tableDeleteButton(player) {
    this.mysqlService.deletePlayer(player.id);
  }

}
