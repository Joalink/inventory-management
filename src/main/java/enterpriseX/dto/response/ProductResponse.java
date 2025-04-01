package enterpriseX.dto.response;

import lombok.*;

//@Value
@Getter
@Setter
@Builder
@AllArgsConstructor
public class ProductResponse {
    Long productId;
    String name;
    Integer quantity;
    Boolean status;
}
