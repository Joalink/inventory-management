import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { IftaLabelModule } from 'primeng/iftalabel';
import { LocalStorageService } from '../../../core/services/local-storage.service';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    IftaLabelModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: 'admin' | 'user' = 'user';

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.localStorageService.setItem('token', response.token);
        this.localStorageService.setItem('role', response.role); 

        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (err) => {
        alert('Error: Credenciales incorrectas');
      }
    );
  }

  public navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
