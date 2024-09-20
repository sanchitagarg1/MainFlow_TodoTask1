import { Component,OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-todo-details',
  templateUrl: './view-todo-details.component.html',
  styleUrls: ['./view-todo-details.component.css']
})
export class ViewTodoDetailsComponent implements OnInit{

  id:number;
  todo : Todo = new Todo();

  constructor(
    private todoService : TodoService,
    private route : ActivatedRoute
    ){}

    ngOnInit(): void {
      
      this.id = this.route.snapshot.params['id'];

      this.todoService.getTodoById(this.id).subscribe( data =>{
        this.todo = data;
      })
    }
}
