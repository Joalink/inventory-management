import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../../../core/services/api.service';
import { Product } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'app-inventory-u-a',
  imports: [CommonModule, TableModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent {
  products!: Product[];

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
}
