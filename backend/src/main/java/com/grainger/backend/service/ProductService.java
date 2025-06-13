package com.grainger.backend.service;

import com.grainger.backend.dto.ProductCreateDto;
import com.grainger.backend.dto.ProductResponseDto;

import java.util.List;

public interface ProductService {
    List<ProductResponseDto> getAllProducts();
    ProductResponseDto createProduct(ProductCreateDto productCreateDto);
    ProductResponseDto getProductById(Long id);
    
} 