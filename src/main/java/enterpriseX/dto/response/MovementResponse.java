package enterpriseX.dto.response;

import lombok.*;

import java.time.LocalDateTime;
//@Value
@Getter
@Setter
@Builder
@AllArgsConstructor
public class MovementResponse {
    Long movementId;
    String username;
    Integer productId;
    String movementType;
    LocalDateTime movementDate;
}
