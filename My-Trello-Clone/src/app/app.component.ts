import { Component, OnInit } from '@angular/core';
import {ITodo} from './interfaces/itodo';
import {TodoService} from './services/todo-service.service';
import {CommunicationService} from './services/communication.service'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My-Trello-Clone';
  todoTitle:string;
  dueDate:Date = null;
  todoId = 5;
  public _reload = true;

  constructor(private TodoService: TodoService, private comm:CommunicationService){
    
  }
  
  

  working:ITodo[] = this.TodoService.getTodoItems("Working");
  backlog:ITodo[] = this.TodoService.getTodoItems("Backlog");
  complete:ITodo[] = this.TodoService.getTodoItems("Complete");
  
  ngOnInit(){
    this.TodoService.addTodoItem({Id: 1, Title: "First Todo Item", CreationDate: new Date("2019-07-01"), Backlog: false, Working: false, Complete: true});
    this.TodoService.addTodoItem({Id: 2, Title: "Second Todo Item", CreationDate: new Date("2019-07-02"),  DueDate: new Date(), Backlog: false, Working: true, Complete: false});
    this.TodoService.addTodoItem({Id: 3, Title: "Third Todo Item", CreationDate: new Date("2019-07-03"), DueDate: new Date("2019-11-03"), Backlog: true, Working: false, Complete: false});
    this.TodoService.addTodoItem({Id: 4, Title: "fourth Todo Item", CreationDate: new Date("2019-07-05"),  DueDate: new Date(), Backlog: true, Working: false, Complete: false});
   
  }

  addTodo():void{
    this.TodoService.addTodoItem({
      Id: this.todoId,
      Title:this.todoTitle,
      Backlog: true,
      Working: false,
      Complete: false,
      CreationDate: new Date(),
      DueDate: this.dueDate
      
    });
    this.todoTitle="";
    this.todoId++;
    this.dueDate = null;
    console.log(this.TodoService.getAllTodoItems())
    this.reload();
  }

  private reload() {
    setTimeout(() => this._reload = false);
    setTimeout(() => this._reload = true);
}
}
