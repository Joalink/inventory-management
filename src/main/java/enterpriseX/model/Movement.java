package enterpriseX.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "movements")
public class Movement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movementId;


    private Integer userId;
    private Integer productId;
    private MovementType movementType;
    private LocalDateTime movementDate;

    public enum MovementType {
        INCOMING, OUTCOMING
    }
}
