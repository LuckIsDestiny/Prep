import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'auth_token';
  private readonly IS_ADMIN_KEY = 'is_admin';
  private readonly USERNAME_KEY = 'username';

  constructor() {}

  get isLoggedIn(): boolean {
    return localStorage.getItem(this.AUTH_TOKEN_KEY) === 'true';
  }

  set isLoggedIn(value: boolean) {
    localStorage.setItem(this.AUTH_TOKEN_KEY, value.toString());
  }

  get isAdmin(): boolean {
    return localStorage.getItem(this.IS_ADMIN_KEY) === 'true';
  }

  set SetUser(value: string) {
    localStorage.setItem(this.USERNAME_KEY, value);
    localStorage.setItem(this.AUTH_TOKEN_KEY, 'true');
    localStorage.setItem(this.IS_ADMIN_KEY, (value === 'admin').toString());
  }

  login(username: string, password: string): boolean {
    if ((username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')) {
      this.isLoggedIn = true;
      this.SetUser = username;
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
    localStorage.removeItem(this.IS_ADMIN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
  }
}
