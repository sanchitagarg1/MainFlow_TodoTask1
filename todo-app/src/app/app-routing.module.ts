import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Todo/todo/todo.component';
import { CreateTodoComponent } from './Todo/create-todo/create-todo.component';
import { UpdateTodoComponent } from './Todo/update-todo/update-todo.component';
import { ViewTodoDetailsComponent } from './Todo/view-todo-details/view-todo-details.component';

const routes: Routes = [
  {path:'todos', component: TodoComponent},
  {path:'', redirectTo: 'todos', pathMatch:'full'},
  {path:'create-todo', component: CreateTodoComponent},
  {path:'update-todo/:id', component: UpdateTodoComponent},
  {path:'view-todo-details/:id', component: ViewTodoDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
