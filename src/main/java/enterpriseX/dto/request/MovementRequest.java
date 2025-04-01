package enterpriseX.dto.request;

import enterpriseX.model.Movement;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MovementRequest {
    private String username;
    private Integer productId;
    private String movementType;
    private LocalDateTime movementDate;
}
