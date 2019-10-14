import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { TodoService } from './services/todo-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TableComponent,
    DeleteModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    NgbModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
