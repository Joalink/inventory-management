import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { LoginComponent } from './features/public/login/login.component';
import { AdminComponent } from './features/private/admin/admin.component';
import { SharedComponent } from './features/private/shared/shared.component';
import { UserComponent } from './features/private/user/user.component';
import { RegisterComponent } from './features/public/register/register.component';
import { HistoricalComponent } from './features/private/admin/historical/historical.component';
import { InventoryAComponent } from './features/private/admin/inventory-a/inventory-a.component';
import { InventoryUComponent } from './features/private/user/inventory-u/inventory-u.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'historical',
        component: HistoricalComponent,
      },
      {
        path: 'inventory',
        component: InventoryAComponent,
      },
    ],
    canActivate: [AuthGuard, AdminGuard],
  },

  {
    path: 'user',
    component: UserComponent,
    children: [
            {
        path: 'inventory',
        component: InventoryUComponent,
      },
    ],
    canActivate: [AuthGuard],
  },

  {
    path: 'shared',
    component: SharedComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: '' },
];