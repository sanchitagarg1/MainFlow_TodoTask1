import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todos : Todo[];

  constructor(
    private todoService : TodoService,
    private router : Router    
    ){}


  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe( ( data : Todo[] )=>{
      this.todos = data;
    })
  }

  updateTodo(id: number){
    this.router.navigate(['update-todo' , id]);
  }

  deleteTodo(id: number){
    this.todoService.deleteTodo(id).subscribe(data => {
      console.log("Deleted Succesfully" + data);
      this.getTodos();
    })
  }


  viewTodoDetails(id:number){
    this.router.navigate(['view-todo-details' , id]);

  }
}
