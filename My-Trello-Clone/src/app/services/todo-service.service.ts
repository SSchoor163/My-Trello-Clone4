import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ITodo } from '../interfaces/Itodo';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList:ITodo [] = [];
  constructor() { }

  getAllTodoItems():ITodo[]
  {
    return this.todoList;
  }

  getTodoItems(lane:string):ITodo[]
  {
    if(lane ==="Backlog")
    {
      return this.todoList.filter(t=>t.Backlog);
    }else if (lane === "Working")
    {
      return this.todoList.filter(t=>t.Working);
    }else if(lane === "Complete")
    {
      return this.todoList.filter(t=>t.Complete);
    }else throwError("lane in getTodoItems is incorrectly defined. should correspond to one of the of the ITodo Boolean variables");
    
  }
 
  getTodoItem(id: number):ITodo{
    const index = this.todoList.findIndex(todoItem=> todoItem.Id === id);
    return this.todoList[index];
  }
  
  addTodoItem(todo: ITodo):void {
    let temp: ITodo = {
      Id: todo.Id,
      Title: todo.Title,
      CreationDate: todo.CreationDate,

      Backlog: todo.Backlog,
      Working: todo.Working,
      Complete: todo.Complete
    }
    if(todo.DueDate)
    {
      temp.DueDate = todo.DueDate;
    }
    //TODO add validation
    this.todoList.push(temp);
  }

  deleteTodoItem(todo: ITodo, id: number):void{
    console.log("delete method was called in todo servcices");
    //TODO add validation to ensure a todo exists
    const index  = this.todoList.findIndex(todoItem=>todoItem.Id===id);
    this.todoList.splice(index,1);
  }
  toggleTodoState(endLane:string, id: number):void{
    let change= this.todoList.find(t=>t.Id===id);
    let index  = this.todoList.indexOf(change);
    if(endLane ==="Backlog")
    {
      change.Working = false;
      change.Complete = false;
      change.Backlog = true;
    }else if (endLane === "Working")
    {
      change.Working = true;
      change.Complete = false;
      change.Backlog = false;
    }else if(endLane === "Complete")
    {
      change.Working = false;
      change.Complete = true;
      change.Backlog = false;
    }else 
      console.log("Error, endlane cause no change" + change);
    
    //TODO check cosonle validation then remove when confirmed
    this.todoList[index] = change;
  }

  updateTodo(updatedItem, id: number)
  {
    //TODO validate updatedItem
    let temp = this.todoList.find(t=>t.Id === id);
    let index = this.todoList.indexOf(temp);
    temp.Title = updatedItem.Title;
    if(updatedItem.DueDate)
    {
      temp.DueDate = updatedItem.DueDate;
    }
    //TODO validate that new inex is indeed temp
    this.todoList[index] = temp;
  }

}
