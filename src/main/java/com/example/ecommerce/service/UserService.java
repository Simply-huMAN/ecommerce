package com.example.ecommerce.service;

import com.example.ecommerce.domain.User;
import com.example.ecommerce.dto.UserAuthDTO;
import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.repository.UserRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserAuthDTO authenticateUser(User user){
        User userRecord = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        return UserAuthDTO.convertToAuthDTO(userRecord);
    }

    public UserDTO getUserByUserName(String userName){
        return UserDTO.convertToDTO(userRepository.findByUsername(userName));
    }

    public UserDTO getUserByEmail(String email){
        return UserDTO.convertToDTO(userRepository.findByEmail(email));
    }

    public UserAuthDTO saveUser(User user){
        return UserAuthDTO.convertToAuthDTO(userRepository.save(user));
    }

    public List<UserDTO> getAllUsers(){
        List<User> users = userRepository.findAll();
        List<UserDTO> userList = users.stream().map(user -> UserDTO.convertToDTO(user)).toList();
        return userList;
    }

}
