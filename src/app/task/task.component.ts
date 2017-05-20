import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'add-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
items: any;
  constructor( private todoListService:TodoListService ) { }

  ngOnInit() {
    this.items = this.todoListService.getItems();
  }
}
