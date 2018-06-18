import { TestBed, inject } from '@angular/core/testing';

import { MysqlPhpService } from './mysql-php.service';

describe('MysqlPhpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysqlPhpService]
    });
  });

  it('should be created', inject([MysqlPhpService], (service: MysqlPhpService) => {
    expect(service).toBeTruthy();
  }));
});
