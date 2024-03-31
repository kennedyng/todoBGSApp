package com.example.demo.todo;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class TodoRequest {
    private Long id;
    private String task;
    private  boolean isDone;
    private String email;
}
