import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Todo/todo/todo.component';
import { CreateTodoComponent } from './Todo/create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { UpdateTodoComponent } from './Todo/update-todo/update-todo.component';
import { ViewTodoDetailsComponent } from './Todo/view-todo-details/view-todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateTodoComponent,
    UpdateTodoComponent,
    ViewTodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
