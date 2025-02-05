package com.example.ecommerce.service;

import com.example.ecommerce.domain.User;
import com.example.ecommerce.dto.UserDTO;
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

    public UserDTO authenticateUser(User user){
        User userRecord = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        return convertToDTO(userRecord);
    }

    public User getUserByUserName(String userName){
        return userRepository.findByUsername(userName);
    }

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public UserDTO convertToDTO(User user){
        if(user==null) return null;
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstname(user.getFirstname());
        userDTO.setLastname(user.getLastname());
        userDTO.setUsername(user.getUsername());
        userDTO.setProfilePicture(user.getProfilePicture());
        return userDTO;
    }

}
