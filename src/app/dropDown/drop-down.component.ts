import { Component, Output, EventEmitter } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})

export class DropDownComponent {
@Output() onToggle = new EventEmitter();
  constructor( private todoListService:TodoListService ) { }

  onSubmit(formValues){
    if(formValues.taskData != null) {
      this.todoListService.addItem(formValues);
      this.toggle();
    }
  }
  cancel(){
    this.toggle();
  }
  toggle(){
    this.onToggle.emit();
  }
}
