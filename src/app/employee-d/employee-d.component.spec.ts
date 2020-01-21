import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDComponent } from './employee-d.component';

describe('EmployeeDComponent', () => {
  let component: EmployeeDComponent;
  let fixture: ComponentFixture<EmployeeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
