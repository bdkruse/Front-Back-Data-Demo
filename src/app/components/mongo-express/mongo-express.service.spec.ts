import { TestBed, inject } from '@angular/core/testing';

import { MongoExpressService } from './mongo-express.service';

describe('MongoExpressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoExpressService]
    });
  });

  it('should be created', inject([MongoExpressService], (service: MongoExpressService) => {
    expect(service).toBeTruthy();
  }));
});
