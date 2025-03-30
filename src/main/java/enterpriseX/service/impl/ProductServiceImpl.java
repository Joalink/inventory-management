package enterpriseX.service.impl;

import enterpriseX.dto.request.ProductRequest;
import enterpriseX.dto.response.ProductResponse;
import enterpriseX.mapper.ProductMapper;
import enterpriseX.model.Product;
import enterpriseX.repository.ProductRepository;
import enterpriseX.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    public ProductResponse createProduct(ProductRequest request) {
        Product product = productMapper.toEntity(request);
        Product saveProduct = productRepository.save(product);
        return productMapper.toResponse(productRepository.save(product));
    }
}
