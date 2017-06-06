import { Component, OnInit } from '@angular/core';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
visible: boolean = false;
items: any[];
disp: any;
editMode: boolean;

  constructor(private todoListService: TodoListService) {}
  
  ngOnInit(){
     this.items = this.todoListService.getItems(); 
  }

  toggle(){
    this.visible = !this.visible;
  }
  edit(e){
    this.toggle();
    this.disp = e.taskData;
    this.editMode = true;
  }
}

