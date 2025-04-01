import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../../core/services/api.service';
import { CheckboxModule } from 'primeng/checkbox';
import { Product } from '../../../../../core/interfaces/product.interface';
import { LocalStorageService } from '../../../../../core/services/local-storage.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CheckboxModule,
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  @Input() product: any;
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<void>();

  isVisible: boolean = false;
  form!: FormGroup;
  productId: number = 0;

  constructor(
    // @Inject(PLATFORM_ID) private platformId: object,
    private fb: FormBuilder,
    private productService: ApiService,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      status: [false],
    });
    // if (this.isPlatformBrowser(this.platformId)) {
    //   localStorage.setItem('key', 'value')
    // }
    // console.log('LocalStorageService injected:', this.localStorageService);
  }

  ngOnInit() {
    if (this.product) {
      this.form.patchValue(this.product);
      this.isVisible = true;
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
