package com.example.demo.todo;

import com.example.demo.user.User;
import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "todos")
@RequiredArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String task;
    private final boolean isDone = false;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;





}
