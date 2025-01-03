package com.example.ecommerce.dataloader;

import com.example.ecommerce.domain.Product;
import com.example.ecommerce.repository.ProductRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Slf4j
@Component
public class ProductsLoader implements CommandLineRunner {
    private ProductRepository productRepository;

    public ProductsLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    @Override
    public void run(String... args) throws Exception {
        log.info("Loading products...");
        loadProducts();
        log.info("Products loaded successfully");
    }

    private void loadProducts(){
        ObjectMapper objectMapper = new ObjectMapper();
        try{
            InputStream inputStream = new ClassPathResource("static/products.json").getInputStream();
            List<Product> products = objectMapper.readValue(inputStream, new TypeReference<List<Product>>(){});
            products.forEach(productRepository::save);
        } catch (Exception e) {
            log.error("Failed to load products", e);
//            throw new RuntimeException(e);
        }
    }
}
