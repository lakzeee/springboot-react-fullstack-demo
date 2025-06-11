package com.grainger.backend.mapper;

import com.grainger.backend.dto.ProductCreateDto;
import com.grainger.backend.dto.ProductResponseDto;
import com.grainger.backend.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);
    ProductResponseDto toProductResponseDto(Product product);
    Product toProduct(ProductCreateDto productCreateDto);
}