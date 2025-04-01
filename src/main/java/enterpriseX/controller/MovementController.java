package enterpriseX.controller;

import enterpriseX.dto.request.MovementRequest;
import enterpriseX.dto.response.MovementResponse;
import enterpriseX.dto.response.ProductResponse;
import enterpriseX.service.MovementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movements")
@RequiredArgsConstructor
public class MovementController {

    private final MovementService movementService;

    @PostMapping
    public ResponseEntity<MovementResponse> createMovement(@Valid @RequestBody MovementRequest request) {

        MovementResponse response = movementService.createMovement(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<MovementResponse>> getAllMovements(){
        List<MovementResponse> movements = movementService.getAllMovements();
        return ResponseEntity.ok(movements);
    }
}
