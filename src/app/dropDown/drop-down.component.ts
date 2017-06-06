import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
 
export class DropDownComponent {
@Output() onToggle = new EventEmitter();
@Input() disp1: any;
@Input() editMode:boolean = false;
  constructor( private todoListService:TodoListService ) { }

  onSubmit(formValues){
    if(formValues.taskData != null && !this.editMode) {
      this.todoListService.addItem(formValues);
      this.toggle();
    }
    else if(this.editMode){
      this.todoListService.editItem(formValues);
      this.editMode = false;
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
