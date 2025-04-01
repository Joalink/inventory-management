import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../../../core/services/api.service';
import { Product } from '../../../../core/interfaces/product.interface';
import { MovementComponent } from './movement/movement.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-inventory-u-a',
  imports: [CommonModule, TableModule, Button, MovementComponent],
  templateUrl: './inventory-u.component.html',
  styleUrl: './inventory-u.component.css',
})
export class InventoryUComponent {
  products: Product[] = [];
  activeProducts: Product[] = [];
  selectedProduct: any = null;

  constructor(private productService: ApiService) {}

  ngOnInit() {
    this.productService.get<Product[]>('products').subscribe({
      next: (data) => {
        this.products = data;
        this.filterActiveProducts();
      },
      error: (err) => {
        console.error('Error getting products:', err);
      },
    });
  }

  // Filtrar productos activos
  filterActiveProducts() {
    this.activeProducts = this.products.filter((product) => product.status);
  }

  openModal(product: any) {
    this.selectedProduct = { ...product }; // Clonamos para evitar mutaciones
    console.log('se presionó', product.productId);
  }

  closeModal() {
    this.selectedProduct = null;
  }

  handleUpdate(updatedProduct: any) {
    const index = this.products.findIndex(
      (p) => p.productId === updatedProduct.id
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.filterActiveProducts(); // Refiltramos después de actualizar
    }
    this.closeModal();
  }
}
