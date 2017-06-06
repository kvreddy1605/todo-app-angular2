import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
items: any=[];
index: any;
  addItem(item){
    this.items.push(item);
  }
  getItems(){
    return this.items;
  }
  deleteItem(trash){
    this.items = this.items.filter((item) => item !== trash );
    return this.items;
  }
  itemIndex(item) {
    let index1 = this.items.findIndex(x => x.taskData == item.taskData);
    this.index=index1;
}
  editItem(item){
    this.items[this.index] = item;
  }
}

