package enterpriseX.service.impl;

import enterpriseX.dto.request.MovementRequest;
import enterpriseX.dto.response.MovementResponse;
import enterpriseX.mapper.MovementMapper;
import enterpriseX.model.Movement;
import enterpriseX.repository.MovementRepository;
import enterpriseX.service.MovementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovementServiceImpl implements MovementService {

    private final MovementRepository movementRepository;
    private final MovementMapper movementMapper;

    @Override
    public MovementResponse createMovement(MovementRequest request){
        Movement movement = movementMapper.toEntity(request);
        Movement savedMovement = movementRepository.save(movement);
        return movementMapper.toResponse(movementRepository.save(movement));
    }
}
