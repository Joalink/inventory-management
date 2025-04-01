package enterpriseX.dto.response;

import lombok.*;

//@Value
@Getter
@Setter
@Builder
@AllArgsConstructor
public class UserResponse {
    String token;
    String username;
    String role;


//    Long userId;
//    String username;
//    String email;
}
