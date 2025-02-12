package com.example.ecommerce.dto;

import com.example.ecommerce.domain.Address;
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
}
