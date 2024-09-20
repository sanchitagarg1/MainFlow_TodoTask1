import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrRL = 'http://localhost:8090/api/todos';

  constructor(private httpClient : HttpClient) { }

  getTodos() : Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.baseUrRL);
  }


  createTodo(todo :Todo): Observable<Todo>{
    return this.httpClient.post<Todo>(this.baseUrRL , todo);
  }


  getTodoById(id: number): Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.baseUrRL}/${id}`);
  }


  updateTodo(id: number, todo : Todo): Observable<Todo>{
    return this.httpClient.put<Todo>(`${this.baseUrRL}/${id}` , todo);
  }

  deleteTodo(id: number):Observable<Todo>{
    return this.httpClient.delete<Todo>(`${this.baseUrRL}/${id}`);
  }
}
