package com.example.ecommerce.service;

import com.example.ecommerce.domain.Product;
import com.example.ecommerce.domain.User;
import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.domain.Wallet;
import com.example.ecommerce.repository.ProductRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Data
@Service
public class ProductService {
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product getProductById(Long id){
        return productRepository.findById(id).orElse(null);
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public UserDTO buyProduct(Long id, User user){
        Wallet userWallet = user.getWallet();
        Product product = productRepository.findById(id).get();
        double productPrice = product.getProductPrice();
        if(userWallet.getBalance() < productPrice) return null;

        userWallet.withdraw((int) productPrice);
        return UserDTO.convertToDTO(user);
    }
}
