import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/Itodo';
import {TodoService} from '../services/todo-service.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() state:string;
  displayedColumns: string[] = ['item'];
  data;
  dataSource:MatTableDataSource<ITodo>;
  constructor(private TodoService: TodoService) { }

 
  ngOnInit() {
    
    console.log(this.getTodo());
    this.dataSource = new MatTableDataSource<ITodo>(this.getTodo());
  }

  getTodo(){
   let data = this.TodoService.getTodoItems(this.state)
    data.forEach(element => {
      element.Title = element.Title.toString(); 
    });
    return data;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
