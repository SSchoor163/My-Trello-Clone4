import { Component, OnInit, Input, forwardRef, Inject, Output, EventEmitter } from '@angular/core';
import {CommunicationService} from '../services/communication.service';
import {TodoService} from '../services/todo-service.service';
import {ITodo} from '../interfaces/itodo';
import { debug } from 'util';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() todo;
  
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

  deleteTodo(todo:ITodo){
    console.log("Delete button in modal was clicked: " + todo);
    ;
    this.TodoService.deleteTodoItem(todo, todo.Id);
    this.modalService.dismissAll();
    this.comm.resetView();
  }

  ngOnInit() {
    
  }

}
