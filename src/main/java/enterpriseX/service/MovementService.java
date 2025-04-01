package enterpriseX.service;

import enterpriseX.dto.request.MovementRequest;
import enterpriseX.dto.response.MovementResponse;
import enterpriseX.dto.response.ProductResponse;

import java.util.List;


public interface MovementService {
    MovementResponse createMovement(MovementRequest request);
    List<MovementResponse> getAllMovements();
}
