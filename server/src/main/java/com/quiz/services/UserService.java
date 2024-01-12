package com.quiz.services;

import com.quiz.exceptions.AlreadyExistException;
import com.quiz.model.User;
import com.quiz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService (UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(@RequestBody User user) {
        if(!userRepository.existsByUserName(user.getUserName())) {
            return userRepository.save(user);
        } throw new AlreadyExistException("Username is already in use. Please choose another name.");
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
