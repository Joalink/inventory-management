import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../../core/services/api.service';
import { CheckboxModule } from 'primeng/checkbox';
import { Product } from '../../../../../core/interfaces/product.interface';
import { LocalStorageService } from '../../../../../core/services/local-storage.service';


@Component({
  selector: 'app-movement',
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CheckboxModule,
  ],
  templateUrl: './movement.component.html',
  styleUrl: './movement.component.css',
})
export class MovementComponent {
  @Input() product: any;
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<void>();

  isVisible: boolean = false;
  form!: FormGroup;
  maxQuantity: number = 0;
  productId: number = 0;

  constructor(
    private fb: FormBuilder, 
    private productService: ApiService,
    private localStorageService: LocalStorageService
    
  ) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    if (this.product) {
      this.form.patchValue(this.product);
      this.isVisible = true;
      this.maxQuantity = this.product.quantity;
      this.productId = this.product.productId;

    }
  }

  submit() {
    if (this.form.valid) {
      // call api to update product
      const updatedProduct = this.form.value;
      this.productService
        .put(`products/${this.product.productId}`, updatedProduct)
        .subscribe({
          next: (res) => {
            this.onUpdate.emit(res);
            this.close();
          },
          error: (err) => console.error('Error al actualizar:', err),
        });
      // call api to create movement action
      const previousQuantity = this.product.quantity;
      const newQuantity = updatedProduct.quantity;
      const movementType =
        newQuantity > previousQuantity ? 'INCOMING' : 'OUTCOMING';
      const movementDate = new Date().toISOString();

      const movementData = {
        // userId: this.localStorageService.getItem('username'),
        username: 'generico@gmail.com',
        productId: this.productId,
        movementType: movementType,
        movementDate: movementDate,
      };
      console.log(movementData);
      this.productService.post('movements', movementData).subscribe({
        next: (res) => {
          console.log('Movimiento registrado:', res);
          this.close();
        },
        error: (err) => console.error('Error al actualizar:', err),
      });
    }
  }

  close() {
    this.isVisible = false;
    this.onClose.emit();
  }
}
