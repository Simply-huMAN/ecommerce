package com.example.ecommerce.domain;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Wallet {
    private int balance;
    private int moneySpent;
}
