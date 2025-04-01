package enterpriseX.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductRequest {
     String name;
     Integer quantity;
     Boolean status;
}
