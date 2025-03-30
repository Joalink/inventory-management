package enterpriseX.mapper;

import enterpriseX.dto.request.MovementRequest;
import enterpriseX.model.Movement;
import enterpriseX.dto.response.MovementResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MovementMapper {

    @Mapping(target="id", ignore = true)
    Movement toEntity(MovementRequest request);

    MovementResponse toResponse(Movement movement);
}
