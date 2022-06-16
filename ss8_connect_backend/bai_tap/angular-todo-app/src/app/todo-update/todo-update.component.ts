import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Todo} from '../models/todo';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  updateForm: FormGroup;
  id: number;
  todo: Todo;
  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }

  ngOnInit(): void {
  }

  getTodo(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.updateForm = new FormGroup({
        id: new FormControl(todo.id),
        content: new FormControl(todo.content),
        complete: new FormControl(todo.complete),
      });
    });
  }

  updateTodo(id: number) {
    const todo = this.updateForm.value;
    this.todoService.updateTodo(id, todo).subscribe(() => {
      alert('update successfully');
    });
  }
}
