import { MongoExpressFormService } from './mongo-express-form.service';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongo-express-form',
  templateUrl: './mongo-express-form.component.html',
  styleUrls: ['./mongo-express-form.component.css']
})
export class MongoExpressFormComponent implements OnInit {
  
  constructor(private data:DataService, private bookService: MongoExpressFormService) { }

  ngOnInit() {  
  }

  onSubmit(form) {
    let post = '{"title":"' + form.value.title + 
               '","genre":"' + form.value.genre +
               '","description":"' + form.value.description +
               '","author":"' + form.value.author +
               '","publisher":"' + form.value.publisher +
               '","pages":"' + form.value.pages +
               '","image_url":"' + form.value.image_url +
               '"}';
    let postEncode = JSON.parse(post);
    
    this.bookService.saveBook(postEncode);

    form.reset();
  }

}