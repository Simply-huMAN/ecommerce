package com.example.ecommerce.controller;

import com.example.ecommerce.domain.Product;
import com.example.ecommerce.service.ProductService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@Slf4j
@RestController
@RequestMapping("/products")
public class ProductController {
    private ProductService productService;

     public ProductController(ProductService productService) {
        this.productService = productService;
     }

    @GetMapping("/{productId}")
    public Product getProductById(@PathVariable("productId") Long id){
        return productService.getProductById(id);
    }

    @PostMapping
    public Product saveProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{productId}")
    public void deleteProduct(@PathVariable("productId") Long id){
        productService.deleteProduct(id);
    }

    @GetMapping
    public List<Product> getAllProducts(){
        log.info("Getting all products");
        return productService.getAllProducts();
    }

}
