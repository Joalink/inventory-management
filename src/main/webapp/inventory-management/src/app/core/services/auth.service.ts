import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

interface AuthResponse {
  token: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/users'; // Ajusta la URL según tu backend

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((response: AuthResponse) => {
          this.localStorageService.setItem('token', response.token);
          this.localStorageService.setItem('role', response.role);
          this.localStorageService.setItem('username', username);
        })
      );
  }

  isAuthenticated(): boolean {
    return !!this.localStorageService.getItem('token');
  }

  getUsername(): string | null {
    return this.localStorageService.getItem('username');
  }

  getRole(): string | null {
    return this.localStorageService.getItem('role');
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  logout(): void {
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('username');
    this.localStorageService.removeItem('role');
  }
}
