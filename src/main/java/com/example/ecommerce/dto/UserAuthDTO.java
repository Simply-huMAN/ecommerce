package com.example.ecommerce.dto;

import com.example.ecommerce.domain.User;
import lombok.Data;

@Data
public class UserAuthDTO {
    private String username;
    private String email;
    private String firstname;
    private String lastname;

    public static UserAuthDTO convertToAuthDTO(User user){
        if(user==null) return null;
        UserAuthDTO userAuthDTO = new UserAuthDTO();
        userAuthDTO.setEmail(user.getEmail());
        userAuthDTO.setFirstname(user.getFirstname());
        userAuthDTO.setLastname(user.getLastname());
        userAuthDTO.setUsername(user.getUsername());
        return userAuthDTO;
    }
}
