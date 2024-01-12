package com.quiz.controller;

import com.quiz.exceptions.AlreadyExistException;
import com.quiz.model.User;
import com.quiz.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*") //change to your port
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController (UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.addUser(user));
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is already in use. Please choose another name.");
        }
    }

    @GetMapping("/user")
    public ResponseEntity<?> getAllUsers() {
        try {
            return ResponseEntity.ok(userService.getAllUsers());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("An error occurred");
        }
    }
}
