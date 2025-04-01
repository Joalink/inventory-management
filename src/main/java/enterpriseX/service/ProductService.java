package enterpriseX.service;

import enterpriseX.dto.request.ProductRequest;
import enterpriseX.dto.response.ProductResponse;

import java.util.List;

public interface ProductService {
    ProductResponse createProduct(ProductRequest request);
    List<ProductResponse> getAllProducts();
    ProductResponse getProductById(Long id);
    ProductResponse updateProduct(Long id, ProductRequest updateRequest);
}
