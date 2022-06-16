import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

// tslint:disable-next-line:variable-name
// let _id: number;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        // id: _i++,
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(() => this.ngOnInit());
      console.log(todo);
      this.content.reset();
    }
  }
  getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
