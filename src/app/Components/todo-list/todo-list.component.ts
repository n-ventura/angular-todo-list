import {Component, OnInit} from '@angular/core';
import  { Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent  implements OnInit{

  todos: Todo [] = [];
  newTodoTitle:string = '';

  constructor(private todoService: TodoService) {   }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos(){
    this.todoService.getTodos().
        subscribe(data => this.todos = data);
  }
  addTodo(){
    if (!this.newTodoTitle.trim()) return;

    const newTodo: Todo = {
      id:0,
      title:this.newTodoTitle,
      completed:false
    }

    this.todoService.addTodo(newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.newTodoTitle = '';
    });
  }

  edit(todo: Todo){
    todo.completed = !todo.completed;
    this.todoService.editTodo(todo).subscribe();
  }

  delete(id:number){
    this.todoService.deleteTodo(id).subscribe(() =>{
      this.todos = this.todos.filter(t => t.id !== id);
    });
  }
}
