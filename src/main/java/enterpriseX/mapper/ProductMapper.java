package enterpriseX.mapper;

import enterpriseX.dto.request.ProductRequest;
import enterpriseX.model.Product;
import enterpriseX.dto.response.ProductResponse;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(target= "productId", ignore = true)
    Product toEntity(ProductRequest request);

    ProductResponse toResponse(Product product);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "productId", ignore = true)
    void updateEntity(ProductRequest updateRequest, @MappingTarget Product existingProduct);
}
