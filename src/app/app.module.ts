import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MysqlPhpComponent } from './components/mysql-php/mysql-php.component';
import { MongoExpressComponent } from './components/mongo-express/mongo-express.component';
import { MongoExpressFormComponent } from './components/mongo-express-form/mongo-express-form.component';
import { MysqlPhpFormComponent } from './mysql-php-form/mysql-php-form.component';
import { MongoExpressService } from './components/mongo-express/mongo-express.service';
import { MongoExpressFormService } from './components/mongo-express-form/mongo-express-form.service';
import { MysqlPhpService } from './components/mysql-php/mysql-php.service';
import { MysqlPhpFormService } from './mysql-php-form/mysql-php-form.service';
import { DataService } from './services/data.service';




@NgModule({
  declarations: [
    AppComponent,
    MysqlPhpComponent,
    MongoExpressComponent,
    MongoExpressFormComponent,
    MysqlPhpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    MongoExpressService,
    MongoExpressFormService,
    MysqlPhpFormService,
    MysqlPhpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
