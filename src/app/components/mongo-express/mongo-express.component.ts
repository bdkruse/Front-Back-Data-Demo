import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MongoExpressService } from './mongo-express.service';

@Component({
  selector: 'app-mongo-express',
  templateUrl: './mongo-express.component.html',
  styleUrls: ['./mongo-express.component.css']
})
export class MongoExpressComponent implements OnInit {
  objectKeys = Object.keys;
  private books 
  subscription: Subscription;

  constructor(private data: DataService, private mongoExpressService: MongoExpressService) {
  }

  ngOnInit() {
    this.subscription = this.data.books.subscribe(bookList => this.books = bookList);
  }
  
  tableDeleteButton(book) {
    this.mongoExpressService.deleteBook(book._id);
  }
}
