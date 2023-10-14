package com.quiz.controller;

import com.quiz.model.User;
import com.quiz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") //change to your port
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        List<User> list = userRepository.findByUserName(user.getUserName());
        if(!list.isEmpty()) {
            return ResponseEntity.badRequest().body("Username is already in use. Please choose another name.");
        }
        return ResponseEntity.ok(userRepository.save(user));
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
