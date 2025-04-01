import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../../../core/services/api.service';
import { Movement } from '../../../../core/interfaces/movement.interface';

@Component({
  selector: 'app-historical',
  standalone: true, // Requerido para componentes independientes
  imports: [CommonModule, TableModule], // Módulos necesarios
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.css',
})
export class HistoricalComponent implements OnInit {
  movements!: Movement[];

  constructor(private movementsService: ApiService) {}

  ngOnInit() {
    this.movementsService.get<Movement[]>('movements').subscribe({
      next: (data) => {
        this.movements = data;
      },
      error: (err) => {
        console.error('Error getting movements:', err);
      },
    });
  }
}
