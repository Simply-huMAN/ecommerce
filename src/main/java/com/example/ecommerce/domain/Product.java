package com.example.ecommerce.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private String productDescription;
    private double productPrice;
    private int productQuantity;
    @Enumerated(EnumType.STRING)
    private ProductCategory productCategory;
    private List<String> productImages;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Product(String productName, String productDescription, double productPrice, int productQuantity, ProductCategory productCategory, List<String> productImages) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productCategory = productCategory;
        this.productImages = productImages;
    }

    public Product(){}
}
