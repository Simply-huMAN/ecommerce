package com.example.ecommerce.controller;

import com.example.ecommerce.domain.User;
import com.example.ecommerce.domain.Wallet;
import com.example.ecommerce.dto.UserAuthDTO;
import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.service.UserService;
import lombok.Data;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/authenticate")
    public ResponseEntity<? extends UserAuthDTO> authenticateUser(@RequestBody User user){
        UserAuthDTO authenticated = userService.authenticateUser(user);
        if(authenticated!=null) return ResponseEntity.ok(authenticated);
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{userName}")
    public UserDTO getUserByUserName(@PathVariable("userName") String userName, @RequestParam(value="expand", required = false, defaultValue = "false") boolean expand){
        return userService.getUserByUserName(userName);
    }

    @PostMapping
    public UserAuthDTO createNewUser(@RequestBody User user){
        Wallet wallet = new Wallet();
        wallet.setBalance(100000);
        user.setWallet(wallet);
        return userService.saveUser(user);
    }

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return userService.getAllUsers();
    }
}
