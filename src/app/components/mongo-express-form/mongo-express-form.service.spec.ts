import { TestBed, inject } from '@angular/core/testing';

import { MongoExpressFormService } from './mongo-express-form.service';

describe('MongoExpressFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoExpressFormService]
    });
  });

  it('should be created', inject([MongoExpressFormService], (service: MongoExpressFormService) => {
    expect(service).toBeTruthy();
  }));
});
