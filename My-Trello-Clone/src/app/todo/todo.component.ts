import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/Itodo'



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
  constructor() { console.log(this.todo);}

  ngOnInit() {
    console.log(this.todo);
    this.todoView();
  }

  todoView(){
    
    this.title = this.todo.Title.toString();
    console.log(this.title);
    this.cDate = this.todo.CreationDate.toDateString();
    if(this.todo.DueDate!==null) this.dDate = this.todo.DueDate.toDateString();
  }
}
