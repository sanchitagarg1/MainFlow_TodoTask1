package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {
	
	@Autowired
	private TodoRepository todorepository;
	
	
	//get all todos
	
	@GetMapping
	public List<Todo> getAllTodos(){		
		return todorepository.findAll();		
	}
	
	
	@PostMapping
	public Todo createTodo(@RequestBody Todo todo) {
		return todorepository.save(todo);
	}
	
	
	@GetMapping("/{id}")
	public Optional<Todo> getTodoById(@PathVariable long id) {
		return todorepository.findById(id);
	}
	
	
	@PutMapping("/{id}")
	public Todo updateTodo(@PathVariable long id, @RequestBody Todo todoDetails) {
		
		Todo todo = todorepository.findById(id).orElseThrow();
		
		todo.setTitle(todoDetails.getTitle());
		todo.setDescription(todoDetails.getDescription());
		todo.setCompleted(todoDetails.isCompleted());
	
		return todorepository.save(todo);
		
	}
	
	
	@DeleteMapping("/{id}")
	public void deleteTodo(@PathVariable long id) {
		 todorepository.deleteById(id);
	}
	
	
}
