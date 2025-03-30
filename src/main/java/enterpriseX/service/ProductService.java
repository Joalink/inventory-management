package enterpriseX.service;

import enterpriseX.dto.request.ProductRequest;
import enterpriseX.dto.response.ProductResponse;

public interface ProductService {
    ProductResponse createProduct(ProductRequest request);

}
