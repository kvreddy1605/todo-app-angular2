import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'add-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
@Input() items: any; 
@Output() onEdit = new EventEmitter();

  constructor( private todoListService:TodoListService ) { }

  delete(item) {
    this.items = this.todoListService.deleteItem(item);
  }
  edit(item) {
    this.todoListService.itemIndex(item);
    this.onEdit.emit(item);
  }
 
}
