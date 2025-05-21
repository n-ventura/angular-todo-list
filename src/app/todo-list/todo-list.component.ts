import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tarefa: string = '';  
  tarefas: Todo [] = [];
  id: number = 0;
 

  adicinaTarefa(){
    if(this.tarefa.trim() !== '') {
      this.id = this.tarefas.length + 1;
      const novaTarefa = new Todo(this.id, this.tarefa, false);
      this.tarefas.push(novaTarefa);
      this.tarefa = '';
    }
    
  }

  riscarItem(itemLista: Todo){
    itemLista.completed = !itemLista.completed;
  }

  limparLista(){
    this.tarefas = [];
  }

}
