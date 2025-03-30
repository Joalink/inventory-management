package enterpriseX.service;

import enterpriseX.dto.request.MovementRequest;
import enterpriseX.dto.response.MovementResponse;


public interface MovementService {
    MovementResponse createMovement(MovementRequest request);
}
