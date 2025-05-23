import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getUserRole();
      if (role === 'student') {
        this.router.navigate(['/student-dashboard']);
      } else if (role === 'instructor') {
        this.router.navigate(['/instructor-dashboard']);
      }
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
