package enterpriseX.mapper;

import enterpriseX.dto.request.UserRequest;
import enterpriseX.model.User;
import enterpriseX.dto.response.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target= "userId", ignore = true)
    User toEntity(UserRequest request);

    UserResponse toResponse(User user);
}
