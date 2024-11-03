import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if(!searchTerm) {
      return todos;
    }

    return todos.filter(todo => todo.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }

}
