package com.example.ecommerce.service;

import com.example.ecommerce.domain.User;
import com.example.ecommerce.repository.UserRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Data
@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean authenticateUser(User user){
        User userFromDb = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if(userFromDb != null){
            return true;
        }
        return false;
    }

    public User getUserByUserName(String userName){
        return userRepository.findByUsername(userName);
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
