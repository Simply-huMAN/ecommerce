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
        return convertToAuthDTO(userRecord);
    }

    public UserDTO getUserByUserName(String userName){
        return convertToDTO(userRepository.findByUsername(userName));
    }

    public UserDTO getUserByEmail(String email){
        return convertToDTO(userRepository.findByEmail(email));
    }

    public UserAuthDTO saveUser(User user){
        return convertToAuthDTO(userRepository.save(user));
    }

    public List<UserDTO> getAllUsers(){
        List<User> users = userRepository.findAll();
        List<UserDTO> userList = users.stream().map(user -> convertToDTO(user)).toList();
        return userList;
    }

    public UserDTO convertToDTO(User user){
        if(user==null) return null;
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstname(user.getFirstname());
        userDTO.setLastname(user.getLastname());
        userDTO.setUsername(user.getUsername());
        userDTO.setProfilePicture(user.getProfilePicture());
        userDTO.setWallet(user.getWallet());
        userDTO.setAddresses(user.getAddresses());
        return userDTO;
    }

    public UserAuthDTO convertToAuthDTO(User user){
        if(user==null) return null;
        UserAuthDTO userAuthDTO = new UserAuthDTO();
        userAuthDTO.setEmail(user.getEmail());
        userAuthDTO.setFirstname(user.getFirstname());
        userAuthDTO.setLastname(user.getLastname());
        userAuthDTO.setUsername(user.getUsername());
        return userAuthDTO;
    }

}
