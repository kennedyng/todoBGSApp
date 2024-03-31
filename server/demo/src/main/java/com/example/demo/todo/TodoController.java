package com.example.demo.todo;

import com.example.demo.TodoServer;
import com.example.demo.user.User;
import com.example.demo.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping(path = "/list")
    public ResponseEntity<List<Todo>> getTodos() {
        return ResponseEntity.ok(todoService.getTodos());
    }


    @PostMapping()
    public ResponseEntity<?> addTodo(@RequestBody TodoRequest request) {
        try{
            Todo createdTodo = todoService.addTodo(request);
            return ResponseEntity.status(HttpStatus.OK).body(createdTodo);
        }catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable("id") Long id) {
        try{
            todoService.deleteTodoById(id);
            return ResponseEntity.status(HttpStatus.OK).body("Todo Task deleted");
        }catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }


    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editTodo(
            @PathVariable("id") Long id,
            @RequestParam(required = true) String task

    ) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(todoService.updateTodo(id, task));
        }catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }





}
