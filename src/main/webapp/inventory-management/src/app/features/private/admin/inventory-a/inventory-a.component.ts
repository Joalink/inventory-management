import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../../../core/services/api.service';
import { Product } from '../../../../core/interfaces/product.interface';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-inventory-u-a',
  imports: [
    CommonModule,
    TableModule,
    Button,
    CreateComponent,
    UpdateComponent,
  ],
  templateUrl: './inventory-a.component.html',
  styleUrl: './inventory-a.component.css',
})
export class InventoryAComponent {
  products!: Product[];
  selectedProduct: any = null;

  constructor(private productService: ApiService) {}

  ngOnInit() {
    this.productService.get<Product[]>('products').subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error getting products:', err);
      },
    });
  }

  openModal(product: any) {
    this.selectedProduct = { ...product }; // Clonamos para evitar mutaciones
    console.log("se presiono", product.productId)
  }

  // Cierra el modal
  closeModal() {
    this.selectedProduct = null;
  }

  // Actualiza el producto en la lista LOCALMENTE (sin recargar)
  handleUpdate(updatedProduct: any) {
    const index = this.products.findIndex((p) => p.productId === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct; // Actualización en memoria
    }
    this.closeModal(); // Cerramos el modal
  }
}
