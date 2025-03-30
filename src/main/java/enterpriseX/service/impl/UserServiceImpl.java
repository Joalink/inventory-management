package enterpriseX.service.impl;

import enterpriseX.dto.request.UserRequest;
import enterpriseX.dto.response.UserResponse;
import enterpriseX.mapper.UserMapper;
import enterpriseX.model.User;
import enterpriseX.repository.UserRepository;
import enterpriseX.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public UserResponse createUser(UserRequest request) {
        User user = userMapper.toEntity(request);
        User savedUser = userRepository.save(user);
        return userMapper.toResponse(userRepository.save(user));
    }


}
