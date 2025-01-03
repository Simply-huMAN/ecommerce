package com.example.ecommerce.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String couponCode;
    private int discountOffer;

    public Offer(String couponCode, int discountOffer) {
        this.couponCode = couponCode;
        this.discountOffer = discountOffer;
    }

    public Offer() {
    }
}
