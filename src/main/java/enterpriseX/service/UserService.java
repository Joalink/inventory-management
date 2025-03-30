package enterpriseX.service;

import enterpriseX.dto.response.UserResponse;
import enterpriseX.dto.request.UserRequest;

public interface UserService {
    UserResponse createUser(UserRequest request);
}