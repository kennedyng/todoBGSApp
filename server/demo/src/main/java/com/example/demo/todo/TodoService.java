package com.example.demo.todo;

import com.example.demo.user.User;
import com.example.demo.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class TodoService {

    @Autowired
    private final TodoRepository todoRepository;
    @Autowired
    private  final  UserRepository userRepository;


    public List<Todo> getTodos() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName();
        return todoRepository.findToDoItemsByUserEmail(userEmail);
    }


    public Todo addTodo(TodoRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName(); // Retrieves the email of the authenticated user
        User user = userRepository.findByEmail(userEmail).orElseThrow(() -> new IllegalArgumentException("User not found with id email " + userEmail));;

        Todo todo = Todo
            .builder()
            .user(user)
            .task(request.getTask())
            .build();

        return todoRepository.save(todo);
    }


    public void deleteTodoById (Long id) {
        boolean todoExists =  todoRepository.existsById(id);
        if(!todoExists) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "todo not found");
        todoRepository.deleteById(id);

    }


    public Todo updateTodo(Long id, String task) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Todo not found with id: " + id));
       todo.setTask(task);
       return todoRepository.save(todo);
    }
}
