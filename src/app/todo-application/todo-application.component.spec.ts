import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApplicationComponent } from './todo-application.component';

describe('TodoApplicationComponent', () => {
  let component: TodoApplicationComponent;
  let fixture: ComponentFixture<TodoApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
