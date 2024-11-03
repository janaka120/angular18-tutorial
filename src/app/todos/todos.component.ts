import { Component, OnInit, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    })
  }

  todoToggledHandler(todo: Todo) {
    this.todoItems.update((item) => {
      return item.map(i => {
        if(i.id === todo.id) {
          return {
            ...i,
            completed: !todo.completed
          }
        }
        return i;
      })
    })
  }
}
