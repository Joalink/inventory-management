package enterpriseX.mapper;

import enterpriseX.dto.request.ProductRequest;
import enterpriseX.model.Product;
import enterpriseX.dto.response.ProductResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(target= "id", ignore = true)
    Product toEntity(ProductRequest request);

    ProductResponse toResponse(Product product);
}
