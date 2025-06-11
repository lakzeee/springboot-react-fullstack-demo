package com.grainger.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProductCreateDto {
    @NotBlank(message = "Product name cannot be blank")
    private String name;
} 