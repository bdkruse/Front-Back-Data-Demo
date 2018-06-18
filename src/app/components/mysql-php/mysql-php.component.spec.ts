import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlPhpComponent } from './mysql-php.component';

describe('MysqlPhpComponent', () => {
  let component: MysqlPhpComponent;
  let fixture: ComponentFixture<MysqlPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysqlPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
