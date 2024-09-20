import { Component,OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit{

  todo : Todo = new Todo();

  constructor(
    private todoService : TodoService,
    private router : Router
    ){}

  ngOnInit(): void {
      
  }

  saveTodo(){
    this.todoService.createTodo(this.todo).subscribe( ( data)=>{
      console.log(data);
      this.goToTodoList();
    });

  }


  goToTodoList(){
    this.router.navigate(['/todos']);
  }

  onSubmit(){
    // console.log(this.todo);
    this.saveTodo();

  }

}
