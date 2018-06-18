import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoExpressComponent } from './mongo-express.component';

describe('MongoExpressComponent', () => {
  let component: MongoExpressComponent;
  let fixture: ComponentFixture<MongoExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
