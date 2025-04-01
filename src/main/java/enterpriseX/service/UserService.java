package enterpriseX.service;

import enterpriseX.dto.response.UserResponse;
import enterpriseX.dto.request.UserRequest;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserRequest request);
    UserResponse getUserById(Long request);
    List<UserResponse> getAllUsers();
}