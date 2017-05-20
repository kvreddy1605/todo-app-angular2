import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
items: any=[];
  addItem(item){
    this.items.push(item);
  }
  getItems(){
    return this.items;
  }
}

