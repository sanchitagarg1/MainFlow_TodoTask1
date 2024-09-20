import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {


  constructor(
    private todoService : TodoService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  todo : Todo = new Todo();
  id: number;

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.todoService.getTodoById(this.id).subscribe( data=>{
      this.todo = data;
    })
  }

  goToTodoList(){
    this.router.navigate(['/todos']);
  }

  onSubmit(){

    this.todoService.updateTodo(this.id , this.todo).subscribe( data =>{
      console.log("Updated the data with" + data);
      this.goToTodoList();
    } )

  }
}
