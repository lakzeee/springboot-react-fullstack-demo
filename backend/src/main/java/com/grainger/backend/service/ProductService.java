package com.grainger.backend.service;

import com.grainger.backend.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product createProduct(Product product);
} 