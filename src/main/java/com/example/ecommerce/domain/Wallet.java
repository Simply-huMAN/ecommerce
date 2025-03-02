package com.example.ecommerce.domain;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Wallet {
    private int balance;
    private int moneySpent;

    public Boolean withdraw(int amount){
        if(amount > balance) return false;
        balance -= amount;
        moneySpent += amount;
        return true;
    }

    public Boolean recharge(int amount){
        balance += amount;
        return true;
    }
}
