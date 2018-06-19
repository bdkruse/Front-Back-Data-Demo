import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlPhpFormComponent } from './mysql-php-form.component';

describe('MysqlPhpFormComponent', () => {
  let component: MysqlPhpFormComponent;
  let fixture: ComponentFixture<MysqlPhpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysqlPhpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlPhpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
