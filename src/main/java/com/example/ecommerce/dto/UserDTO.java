package com.example.ecommerce.dto;

import com.example.ecommerce.domain.Address;
import com.example.ecommerce.domain.User;
import com.example.ecommerce.domain.Wallet;
import lombok.Data;

import java.util.List;

@Data
public class UserDTO {
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String profilePicture;
    private Wallet wallet;
    private List<Address> addresses;

    public static UserDTO convertToDTO(User user){
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
}
