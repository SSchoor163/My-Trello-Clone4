import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/Itodo';
import { TodoService } from '../services/todo-service.service';
import { CommunicationService } from '../services/communication.service';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo:ITodo;
  
  title;
  cDate;
  dDate;
  constructor(private todoService:TodoService, private comm: CommunicationService) { console.log(this.todo);}

  ngOnInit() {
    
    this.todoView();
  }

  todoToggle(lane:string):void{
    this.todoService.toggleTodoState(lane, this.todo.Id);
    this.comm.resetView();
  }

  todoView(){
    
    this.title = this.todo.Title.toString();
    
    this.cDate = this.todo.CreationDate.toDateString();
 
    if(this.todo.DueDate) this.dDate = this.todo.DueDate.toDateString();
    console.log(this.dDate);
  }
}
