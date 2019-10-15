import { Component, OnInit, Input, forwardRef, Inject, Output, EventEmitter } from '@angular/core';
import {CommunicationService} from '../services/communication.service';
import {TodoService} from '../services/todo-service.service';
import {ITodo} from '../interfaces/itodo';
import { debug } from 'util';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() todo2;
  todoTitle:string;
  dueDate:Date = null;
  currentDueDate;
  currentTitle = this.todo2
  closeResult: string;
  

  constructor(@Inject(forwardRef(() => NgbModal)) private modalService: NgbModal,
    private TodoService: TodoService, private comm:CommunicationService) {   }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  editTodo(){
    let updatedTodo:ITodo = {
      Id: this.todo2.Id,
      Title: this.todo2.Title,
      CreationDate: this.todo2.CreationDate,
      DueDate: this.todo2.DueDate,
      Backlog: this.todo2.Backlog,
      Working: this.todo2.Working,
      Complete: this.todo2.Complete
    };
    if(this.todoTitle)
      updatedTodo.Title = this.todoTitle;
    if(this.dueDate)
      updatedTodo.DueDate = new Date(this.dueDate);
    console.log("edit button in modal was clicked:");
    console.log(updatedTodo);
    this.TodoService.updateTodo(updatedTodo, this.todo2.Id);
    this.modalService.dismissAll();
    this.comm.resetView();
  }

  ngOnInit() {
    if(this.todo2.dueDate)
      console.log(this.todo2.DueDate.toDateString());
    if(this.todo2.dueDate)
      this.currentDueDate = this.todo2.DueDate.toDateString();
    else 
      this.currentDueDate = "(optional)";
      console.log(this.currentDueDate);
  } 

}

