package com.example.ecommerce.domain;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Specification {
    private String specificationKey;
    private String specificationValue;

    public Specification(String specificationKey, String specificationValue) {
        this.specificationKey = specificationKey;
        this.specificationValue = specificationValue;
    }

    public Specification() {}
}
