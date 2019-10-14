import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/Itodo';



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
    
    this.todoView();
  }

  todoView(){
    
    this.title = this.todo.Title.toString();
    
    this.cDate = this.todo.CreationDate.toDateString();
    console.log(this.todo.DueDate);
    if(this.todo.DueDate) this.dDate = this.todo.DueDate.toDateString();
  }
}
