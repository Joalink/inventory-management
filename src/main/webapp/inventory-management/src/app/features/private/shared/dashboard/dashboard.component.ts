import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  sidebarVisible = false;
  isSubmenuOpen = false; // Nueva variable de estado

  // Controla la apertura/cierre del submenú
  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  // Cierra la barra lateral solo cuando se hace clic en un ítem hijo
  closeSidebar() {
    this.sidebarVisible = false;
  }
}