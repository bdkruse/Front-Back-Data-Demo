import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoExpressFormComponent } from './mongo-express-form.component';

describe('MongoExpressFormComponent', () => {
  let component: MongoExpressFormComponent;
  let fixture: ComponentFixture<MongoExpressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoExpressFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoExpressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
