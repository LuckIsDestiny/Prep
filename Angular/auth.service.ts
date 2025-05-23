import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: 'student' | 'instructor' | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'student' && password === 'password') {
      this.isAuthenticated = true;
      this.userRole = 'student';
      return true;
    } else if (username === 'instructor' && password === 'password') {
      this.isAuthenticated = true;
      this.userRole = 'instructor';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): 'student' | 'instructor' | null {
    return this.userRole;
  }
}
