import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropDownComponent } from './dropDown/drop-down.component';
import { TaskComponent } from './task/task.component';
import { TodoListService } from './shared/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
