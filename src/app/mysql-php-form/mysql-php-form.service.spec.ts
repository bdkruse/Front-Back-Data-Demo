import { TestBed, inject } from '@angular/core/testing';

import { MysqlPhpFormService } from './mysql-php-form.service';

describe('MysqlPhpFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysqlPhpFormService]
    });
  });

  it('should be created', inject([MysqlPhpFormService], (service: MysqlPhpFormService) => {
    expect(service).toBeTruthy();
  }));
});
