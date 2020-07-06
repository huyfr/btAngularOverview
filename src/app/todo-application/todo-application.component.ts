import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Todo} from '../../models/todo';

let _id = 1;

@Component({
  selector: 'app-todo-application',
  templateUrl: './todo-application.component.html',
  styleUrls: ['./todo-application.component.scss']
})
export class TodoApplicationComponent implements OnInit {

  constructor() { }

  userInput = new FormControl();
  todos: Todo[] = [];

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        status: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].status = !this.todos[i].status;
  }

  ngOnInit(): void {
  }

  onClick() {
    const {value} = this.userInput;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: (document.getElementById('content') as HTMLInputElement).value,
        status: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }
}
