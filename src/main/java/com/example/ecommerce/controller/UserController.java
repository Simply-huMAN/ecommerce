package com.example.ecommerce.controller;

import com.example.ecommerce.domain.User;
import com.example.ecommerce.service.UserService;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{userName}")
    public User getUserByUserName(@PathVariable("userName") String userName){
        return userService.getUserByUserName(userName);
    }

    @PostMapping
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
