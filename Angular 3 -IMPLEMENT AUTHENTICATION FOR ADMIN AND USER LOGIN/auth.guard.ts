import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['role'];

    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    if ((expectedRole === 'admin' && !this.authService.isAdmin) ||
        (expectedRole === 'user' && this.authService.isAdmin)) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }
}
