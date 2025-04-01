package enterpriseX.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//@Data
@Getter
@Setter
public class UserRequest {

    @Email
    private String username;

    @Size(min=8)
    private String password;

//    @NotBlank
//    private String role;

}
