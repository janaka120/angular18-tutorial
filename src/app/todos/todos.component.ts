import { Component, OnInit, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems)
  }
}
