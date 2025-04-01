import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    IftaLabelModule,
    DropdownModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string = '';    
  password: string = '';
  role: 'admin' | 'user' = 'user';
  users: any[] = []; 

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.username || !this.password) {
      alert('Please fill in all fields');
      return;
  }

    const newUser = {usernam: this.username, password: this.password, role: this.role};
    this.users.push(newUser); 

    alert('User registered successfully!');
    this.router.navigate(['/login']); 
  }

  public navigateToLogin() {  
    this.router.navigate(['/login']);
  }
}
